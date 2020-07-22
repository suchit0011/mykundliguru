import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() {
    // alert('about');
    console.log('about working')
   }

  ngOnInit() {
    window.scroll(0,0);
  }

}
