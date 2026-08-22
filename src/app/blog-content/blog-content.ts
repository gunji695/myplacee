import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-blog-content',
  imports: [Sidebar],
  templateUrl: './blog-content.html'
})
export class BlogContent {
}
