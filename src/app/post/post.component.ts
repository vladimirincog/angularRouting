import { Post, PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post = { title: '0', text: '0', id: 0 };

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public postsService: PostsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('Params: ', params);
      this.post = this.postsService.getById(+params.id);
      //console.log(this.post)
    });
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }

  //backPosts(){
  //  this.router.navigate(['/posts']);
  //}
}
