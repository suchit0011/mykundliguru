import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/_services/user.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private userservice:UserService) { }
  openqueForm(){
  this.userservice.shareData();
  }
  ngOnInit() {
    
  }

}
