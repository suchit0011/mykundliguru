import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/_services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css']
})
export class HoroscopeComponent implements OnInit {
  horoscopeName;
  horoscopeRes;
  modalRef: BsModalRef;
  horoscopeExist:boolean = true;
  constructor(private userservice:UserService,private modalService: BsModalService) { }

  ngOnInit() {
  }
  openhoroscopeModal(dailyhoroscope,sign) {
    this.horoscopeExist = false;
    this.modalRef = this.modalService.show(dailyhoroscope);
    this.horoscopeRes = "";
    this.horoscopeName = sign;
    this.userservice.getHoroscope(sign).subscribe(res=>{
      this.horoscopeExist = true;
      this.horoscopeRes = res;
    })
  }
}
