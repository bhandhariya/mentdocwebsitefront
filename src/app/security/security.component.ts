import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.leftmenutrigger').on('click', function(e) {
          $('.side-nav').toggleClass("open");
          e.preventDefault();
      });
  });
  $(function() {
      $(document).scroll(function() {
          var $nav = $(".fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });
  $(".card-link").click(function() {
      $(this).toggleClass("down");
  })
  }


}
