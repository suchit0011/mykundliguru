import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/_services/user.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private userservice:UserService,) {

   }
   openqueForm(){
    this.userservice.shareData();
   }
  ngOnInit() {
    window.scroll(0,0);
  }

}
