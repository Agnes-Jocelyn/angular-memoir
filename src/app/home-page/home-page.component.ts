import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ShowDialogComponent } from './show-dialog/show-dialog.component';
import { PostService } from '../post.service'
import { Post } from '../post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts : Post[];

  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() : void {
    this.postService.getPosts().subscribe(
      posts => this.posts = posts
    );
  }

  openDialog(){
    this.dialog.open(ShowDialogComponent)
  }
}
