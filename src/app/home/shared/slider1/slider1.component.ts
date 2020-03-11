import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements OnInit {
images;
  constructor(config: NgbCarouselConfig,private http:HttpClient) { 
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.getSliders();
  }


  getSliders(){
    this.http.get('api/banner/getbanner').subscribe(this.cb)
  }
  cb=(r)=>{
    this.images=r;
    console.log(this.images)
  }
}
