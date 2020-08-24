import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/_services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {TranslateService} from '@ngx-translate/core';
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
  gethoroscope = [];
  allhoroscope;
  constructor(private userservice:UserService,private modalService: BsModalService,private translate: TranslateService) { }

  ngOnInit() {
  }
  openhoroscopeModal(dailyhoroscope,sign,gettitle) {
    console.log('---',sign);
    // this.horoscopeExist = false;
    this.modalRef = this.modalService.show(dailyhoroscope);
    this.horoscopeRes = "";
    this.horoscopeName = gettitle;
    this.allhoroscope = "";
    this.translate.get('horoscopemodelTag1.data').subscribe(
      values => {
        this.gethoroscope = Object.keys(values).map(key =>
           values[key]
           );
           if( this.gethoroscope.length>0){
            this.gethoroscope.forEach(val=>{
              console.log('++',val.id,sign);
              if(val.id == sign){
                // val.que_detail.forEach(element => {
                  this.allhoroscope = val.horodescription;
                  console.log('Questions [[', val.horodescription)
                  // this.questionExist = true;
                // });
              }
             
            })
           }
      }
   ); 
    // this.userservice.getHoroscope(sign).subscribe(res=>{
    //   this.horoscopeExist = true;
    //   this.horoscopeRes = res;
    // })
  }
}
