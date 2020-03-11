import { Component, OnInit } from '@angular/core';
import baguetteBox from 'baguettebox.js';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllGallaryPhotos();
   
  }
  getAllGallaryPhotos(){
    this.http.get('/api/gallary/getbanner').subscribe(this.cb)
  }
  
  gal;
cb=(result)=>{
  this.gal=result;
  console.log(this.gal)
}
}
