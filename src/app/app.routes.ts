import { Routes } from '@angular/router';
import { BlogContent } from './blog-content/blog-content';
import { Selection } from './selection/selection';

export const routes: Routes = [
  {
    path: '',
    component: Selection
  },
  {
    path: 'blog-content',
    component: BlogContent
  }
];
