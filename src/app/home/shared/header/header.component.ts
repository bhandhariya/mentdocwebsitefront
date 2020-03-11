import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   
  constructor(private router:Router) { }

  ngOnInit() {

    $('.menu-toggle').click(function(){
      $('.site-nav').toggleClass('site-nav--open')
      $(this).toggleClass('open')
    });
    


    $(window).on("scroll",function(){
      if($(window).scrollTop()){
        $('.container-fluid').addClass('black');
      }
      else{
        $('.container-fluid').removeClass('black');
      }
    })
    /*$(document).ready(function(){
      $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.overlay').toggleClass('active')
      })
    })*/
    /*const navSlide=()=>{

      const burger=document.querySelector('.burger');
      const nav=document.querySelector('ul');
      const navLinks=document.querySelectorAll('li');

      burger.addEventListener('click',()=>{
          nav.classList.toggle('nav-active');
  
  
          //animate
  
          navLinks.forEach((link:any, index) => {
              if(link.style.animation){
                  link.style.animation='';
              }
              else{
                  link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+1.5}s`;
              }
         
          
          });
          //burger Animation
          burger.classList.toggle('toggle');
      });
      
     
  }
  navSlide();





    $(window).on("scroll",function(){
      if($(window).scrollTop()){
        $('nav').addClass('black');
      }
      else{
        $('nav').removeClass('black');
      }
    })*/

    
   
  }
 
}
