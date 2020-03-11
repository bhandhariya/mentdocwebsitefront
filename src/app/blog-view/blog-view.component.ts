import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Route} from '@angular/router';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
// we are use this property to store the singleBlog information in this property.   
public currentBlog;
  id;
  constructor(private ActivatedRoute:ActivatedRoute,private Http:HttpClient) {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    return this.Http.post('http://localhost:8080/api/blog/getbyid',{id:this.id}).subscribe(res=>{
      console.log(res); 
      this.currentBlog =res;
    })

  }


}
