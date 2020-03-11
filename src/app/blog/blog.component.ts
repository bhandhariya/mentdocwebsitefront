import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
Blogs;
current;

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
    
    this.http.get('/api/blog/getall').subscribe(r=>{
      this.Blogs=r;
      console.log(r)
    }) 
  }

  getSingleBlog(id){
    this.route.navigate(['/blogview/'+id ]) 
    
  }

}
