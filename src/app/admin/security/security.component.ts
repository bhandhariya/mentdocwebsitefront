import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { getRandomString } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private storage:AngularFireStorage,private http:HttpClient) { }
  filePath:string;
  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    this.getAllBanners();
  }

  gallaryForm=new FormGroup({
    title:new FormControl(''),
    photoUrl:new FormControl('')
  })
  bannerFormSubmit(r){
    console.log(r);
    this.http.post('/api/gallary/upload',r).subscribe(this.uploadSB)
  }
  uploadSB=(dt)=>{
    console.log(dt)
    this.getAllBanners()
  }
  /*uploadPhote(event){
    //file object
    const file=event.target.files[0];
    console.log(file);
    var randomSting=Math.floor(Date.now()/1000);
        // storage path
        const filePath = 'mentcom'+randomSting;
        const fileRef = this.storage.ref(filePath);
    
        //main task
         const task=this.storage.upload(filePath,fileRef);
        //get notified when the download url is available
          task.snapshotChanges().pipe(
            finalize(()=>{
              var downloadURL=fileRef.getDownloadURL();
              //the above step returns an observable which can be subscribed to fetch the data within it.
              downloadURL.subscribe(data=>{

                //
                console.log(data)
                this.gallaryForm.get('photoUrl').setValue(data)

              })
            })
            .subscribe(data=>{
    
            })
          
            }*/
            gallaryUpload(event){
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
                finalize(() =>{ 
                  var url = fileRef.getDownloadURL()
                  url.subscribe(e=>{
                    console.log(e)
                    this.gallaryForm.get('photoUrl').setValue(e)
                  })
                } )
             )
            .subscribe(e=>{
              
            })
          
            }
  getAllBanners(){
    this.http.get('api/gallary/getbanner').subscribe(this.getAllCB)
  }
  	
  gallaries;
  getAllCB=(dt)=>{
      this.gallaries=dt;
  }
  deleteByID(id){
      console.log(id);
      var obj={
        id:id
      }
      this.http.post('api/gallary/deleteBanerByid',obj).subscribe(r=>{
        console.log(r);
        this.getAllBanners();
      })
        
      }
  }

