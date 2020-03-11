import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  Blogs;
  constructor(private storage:AngularFireStorage,private http:HttpClient) { }

  ngOnInit() {
    this.http.get('/api/blog/getall').subscribe(r=>{
      this.Blogs=r;
      console.log(r)
    }) 
  }
  blogForm=new FormGroup({
    title:new FormControl(''),
    image:new FormControl(''),
    text:new FormControl('')
  })
  
  blogFormSubmit(r){
    console.log(r);
     this.http.post('/api/blog/upload',r).subscribe(this.uploadSB)
  }
  uploadSB=(dt)=>{
    // this.Blogs=dt;
     console.log(dt)
  }
  uploadPhoto(event){
    const file = event.target.files[0];
    console.log(file);
    var randomString=Math.floor(Date.now() / 1000);
    const filePath = 'mentcomblog'+randomString;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    task.snapshotChanges().pipe(
      finalize(() =>{ var url = fileRef.getDownloadURL()
        url.subscribe(e=>{
          console.log(e)
          this.blogForm.get('image').setValue(e)
        })
      } )
   )
  .subscribe(e=>{
    
  })

  }

}
