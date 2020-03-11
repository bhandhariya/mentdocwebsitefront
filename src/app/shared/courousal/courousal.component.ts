import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-courousal',
  templateUrl: './courousal.component.html',
  styleUrls: ['./courousal.component.css'],
  providers: [NgbCarouselConfig]
})
export class CourousalComponent implements OnInit {
  images;
  constructor(config: NgbCarouselConfig,private http:HttpClient) { 
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    console.log(this.images);
    this.http.get('/api/many').subscribe(this.cb)
  }
  cb=(r)=>{
    this.images=r;
    console.log(this.images)
  }

}
