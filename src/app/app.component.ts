import { Component,ViewChild } from '@angular/core';
import {UserService} from 'src/app/_services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'astroline';
  modalRef: BsModalRef;
  registerForm: FormGroup;
  submitted = false;
  autofilledQue;
  submitProcess:boolean = false;
  constructor(private userservice:UserService,private modalService: BsModalService,private formBuilder: FormBuilder) { 
    this.userservice.shareValue.subscribe(res=>{
      if(res == "openform"){
        document.getElementById("openmodelbtn").click();
        console.log('+++++++++++')
        this.registerForm.patchValue({
          question:''
        })
      }
    })
    this.userservice.shareQuestion.subscribe(res=>{
      if(res){
        document.getElementById("openmodelbtn").click();
        this.autofilledQue = res;
        console.log('+++++++csscsd++++',res)
        this.registerForm.patchValue({
          question:res
        })
      }
    })
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      birthplace: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      birthtime: ['', Validators.required],
      contact: ['', Validators.required],
      question: ['', Validators.required],
  });
  this.registerForm.patchValue({
    gender:'Male'
  })
  }
  openModal(template) {
    // this.registerForm.reset();
    this.submitProcess = false;
    this.registerForm.patchValue({
      gender:'Male'
    })
    this.registerForm.patchValue({
      question:''
    })
    this.submitted = false;
    this.modalRef = this.modalService.show(template);
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }else{
      this.submitProcess = true;
this.userservice.submitUser(this.registerForm.value).subscribe(res=>{
  console.log('form submitted',res);
  if(res){
    this.modalRef.hide()
    this.submitted = false;
    document.getElementById("paybtn").click();
  }
})

    }
}
getTest(){
  console.log('bt working');
  document.getElementById("paybtn").click();
}
  openNav() {
    document.getElementById("sidenavclose").style.marginLeft = "0px";
  }
  
   closeNav() {
     console.log('close working')
    document.getElementById("sidenavclose").style.marginLeft= "-315px";
  }
  
}
