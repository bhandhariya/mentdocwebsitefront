import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private storage:AngularFireStorage,private http:HttpClient) { }

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    this.getAllBanners();
  }
  bannerForm=new FormGroup({
    title:new FormControl(''),
    photoUrl:new FormControl('')
  })
  bannerFormSubmit(r){
    console.log(r);
    this.http.post('/api/banner/upload',r).subscribe(this.uploadSB)
  }
  uploadSB=(dt)=>{
    console.log(dt)
    this.getAllBanners()
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
  getAllBanners(){
    this.http.get('/api/banner/getbanner').subscribe(this.getAllCB)
  }
  banners;
  getAllCB=(dt)=>{
    this.banners=dt;
  }

  deletebyID(id){
    console.log(id);
    var obj={
      id:id
    }
    this.http.post('/api/banner/deleteBanerByid',obj).subscribe(r=>{
    console.log(r);
    this.getAllBanners();
    })
  }
}
