import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestimonialService } from "../../../testimonial.service";
@Component({
  selector: 'app-testomonial',
  templateUrl: './testomonial.component.html',
  styleUrls: ['./testomonial.component.css']
})
export class TestomonialComponent implements OnInit {
  Testimonials;
  loader;
  constructor(private http:HttpClient,private test:TestimonialService) {
   }

  ngOnInit() {
   
   this.getAllTestimonials();
   

  }

  getAllTestimonials(){
    this.http.get('/api/testimonial/getall').subscribe(this.cbb)
  }
  cbb=(res)=>{
    this.Testimonials = res;
    console.log(this.Testimonials);

  }
  

}
