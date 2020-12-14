import { Component } from '@angular/core';
import { CatsPaths } from '../cats/cats-paths.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  CatsPaths = CatsPaths;
}
