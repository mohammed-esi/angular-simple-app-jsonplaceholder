import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'

import { Post } from '../../models/Post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  post: {
    id: number,
    title: string,
    body: string
  };
  currentPost: Post = {
    id: 0,
    title: '',
    body: '',
    isNew: false,
    isUpdate: false
  }
  loading: boolean = true

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      setTimeout(() => {
        this.loading = false
        this.posts= posts
      }, 2000);
    })
  }

  getPost(post: Post) {
    return this.post= post
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
  }

  onUpdatePost(post: Post) {
    this.posts.forEach((cur, index) => {
      if(post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.currentPost = {
          id: 0,
          title: '',
          body: '',
          isNew: false,
          isUpdate: false
        }
      }
    })
  }

  removePost () {
    this.postService.removePost(this.post.id).subscribe(post => {
      this.posts.forEach((cur, index) => {
        if (post.id === cur.id) {
          this.posts.splice(index, 1)
        }
      })
    })
  }

}
