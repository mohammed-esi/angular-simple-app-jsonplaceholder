import { Component } from '@angular/core';

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-app';

  public showOverlay = true;
  public showContent = true;

  constructor(private router: Router) { 
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
      this.showContent = false;
    }
    if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.showOverlay = false;
          this.showContent = true;
        }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
      this.showContent = true;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
      this.showContent = true;
    }
  }
}
