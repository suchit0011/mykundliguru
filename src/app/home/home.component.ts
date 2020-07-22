import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  modalRef: BsModalRef;
 horoscopeName;
 horoscopeRes;
 questionHeading;
 horoscopeExist:boolean = true;
  constructor(  private route: ActivatedRoute,   private router: Router,private userservice:UserService,private formBuilder: FormBuilder,private modalService: BsModalService) { }
  openhoroscopeModal(dailyhoroscope,sign) {
    this.horoscopeExist = false;
    this.modalRef = this.modalService.show(dailyhoroscope);
    console.log('+++',sign)
    this.horoscopeRes = "";
    this.horoscopeName = sign;
    this.userservice.getHoroscope(sign).subscribe(res=>{
      this.horoscopeExist = true;
      this.horoscopeRes = res;
      console.log('+++ horo',res)
    })
  }
openForm(){
  this.userservice.shareData();
}
// askQuestion(question,questionthing){
//   this.questionHeading = question;
//   this.modalRef = this.modalService.show(questionthing);
// console.log('my quest',question);
// }
// askAdded(getque){
//   this.modalRef.hide();
//   this.userservice.askFilledque(getque.target.innerText);
// }
  ngOnInit() {
    
this.route.paramMap.subscribe(params => { 
  console.log('110',params)
  let segment = params.get('askquestion');
  if(segment == 'askquestion'){
    window.location.hash = '';
    window.location.hash = 'testOne';
  }else{
    window.scroll(0,0);
  }
  console.log('110',params.get('askquestion'))
    // this.id = params.get('id'); 
});
    // window.location.hash = '';
    // window.location.hash = 'testOne';
  // this.userservice.getHoroscope().subscribe(res=>{
  //   console.log('+++ horo',res)
  // })
  }

}
