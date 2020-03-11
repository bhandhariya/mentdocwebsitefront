import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private storage:AngularFireStorage,private http:HttpClient) { }

  ngOnInit() {
    this.getAllTestimonials();
  }

  testForm=new FormGroup({
    name:new FormControl(''),
    image:new FormControl(''),
    title:new FormControl(''),
    text:new FormControl('')
  })

  testFormSubmit(r){
    console.log(r);
    this.http.post('/api/testimonial/upload',r).subscribe(this.uploadSB)
  }
  uploadSB=(dt)=>{
    console.log(dt);
    this.getAllTestimonials();  
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
          this.testForm.get('image').setValue(e)
        })
      } )
   )
  .subscribe(e=>{
  })
  }
  getAllTestimonials(){
    this.http.get('/api/testimonial/getall').subscribe(this.getallCB)
  }
  Testimonials
  getallCB=(dt)=>{
    this.Testimonials=dt;
    console.log(this.Testimonials)
  }
  deletebyID(id){
    var obj={
      id:id
    }
    this.http.post('/api/testimonial/deletebyid',obj).subscribe(r=>{
      console.log(r);
      this.getAllTestimonials();
    })
  }
}
