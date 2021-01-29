import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { PostService } from '../../../services/post.service'

import { Post } from '../../../models/Post'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter()
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter()
  @Input() currentPost: Post;
  @ViewChild('postForm') form:any;


  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  addPost({value, valid}: {value: Post, valid: boolean}) {
    if (!valid) {
      console.log('form is not valid')
    } else {
      value.isNew = true
      this.postService.saveAdd(value).subscribe(post => {
        this.newPost.emit(post);
      })
      this.form.reset()
    }
  }

  updatePost() {
    this.currentPost.isUpdate = true
    this.postService.updatePost(this.currentPost).subscribe(post => {
      this.updatedPost.emit(post)
    })
  }

}
