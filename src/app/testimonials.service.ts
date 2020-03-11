import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  public p:boolean=true;
  constructor() { }

  startService(){
   this.p=false;
   console.log(this.p)
  }
  showStopservice(){
     this.p=true;
     console.log(this.p)
  }
}
