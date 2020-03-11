import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private storage:AngularFireStorage,private http:HttpClient) { }

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  banner;blog;news;article;testimonial;
  bannerr(){
    this.banner="open";
    this.blog="";
    this.news="";
    this.article="";
    this.testimonial="";
    

  }
  
  blogg(){
    this.banner="";
    this.blog="open";
    this.news="";
    this.article="";
    this.testimonial="";
  }
  newss(){
    this.banner="";
    this.blog="";
    this.news="open";
    this.article="";
    this.testimonial="";
  }
  articlee(){
    this.banner="";
    this.blog="";
    this.news="";
    this.article="open";
    this.testimonial="";
  }
  testimoniall(){
    this.banner="";
    this.blog="";
    this.news="";
    this.article="";
    this.testimonial="open";
  }
  bannerForm=new FormGroup({
    title:new FormControl(''),
    photoUrl:new FormControl('')
  })
  bannerFormSubmit(r){
    console.log(r);
    this.http.post('/api/upload',r).subscribe(this.uploadSB)
  }
  uploadSB=(dt)=>{
    console.log(dt)
  }
  bannerUpload(event){
    console.log(event.target.files[0]);
    // this.bannerForm.get('photoUrl').setValue(event.target.files[0]);
     const randomId = Math.random().toString(36).substring(2);
    var ref=this.storage.ref(randomId);
    var task=ref.put(event.target.files[0]);
    task.snapshotChanges().pipe
  }
  uploadPhoto(event){
    const file = event.target.files[0];
    console.log(file);
    var randomString=Math.floor(Date.now() / 1000);
    const filePath = 'mentcom'+randomString;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    task.snapshotChanges().pipe(
      finalize(() =>{ var url = fileRef.getDownloadURL()
        url.subscribe(e=>{
          console.log(e)
          this.bannerForm.get('photoUrl').setValue(e)
        })
      } )
   )
  .subscribe(e=>{
    
  })

  }
}
