import { Component, OnInit } from "@angular/core";
import { PostsService } from "../services/posts.service";
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostsService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (response: any[]) => {
        this.posts = response;
      },
      (error) => {
        alert("unexpected error");
        console.log(error);
      }
    );
  }

  createPost(name: HTMLInputElement) {
    let post: any = { title: name.value };
    name.value = "";
    this.service.addPost(post).subscribe(
      (response: any) => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        if(error.status===404)
          alert('Already created')
        else
          alert("unexpected error");
          console.log(error);
      }
    );
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        alert("unexpected error");
        console.log(error);
      }
    );
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      (response: any) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if(error.status===404)
          alert('Already deleted')
        else
          alert("unexpected error");
          console.log(error);
      }
    );
  }
}
