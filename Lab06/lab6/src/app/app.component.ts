<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AlbumDetailComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab6';
}
=======
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AlbumDetailComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab6';
}
>>>>>>> 2b7fc7606ef1912692e8954991b3f1e3dd050455
