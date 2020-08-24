import { Component,ViewChild } from '@angular/core';
import {UserService} from 'src/app/_services/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
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
  isLang:boolean;
  // isLang = true;
  detectonPage = "";
  constructor(private translate: TranslateService,private router:Router, private userservice:UserService,private modalService: BsModalService,private formBuilder: FormBuilder) { 
    this.detectonPage = localStorage.getItem('lgkey');
    console.log('+-', this.detectonPage)
    // 
    if(this.detectonPage == "" || this.detectonPage == null){
    translate.setDefaultLang('en');
    this.isLang = true;
    }else if(this.detectonPage == "hindi"){
      this.isLang = false;
      translate.setDefaultLang('hn');
    }else if(this.detectonPage == "english"){
      this.isLang = true;
      translate.setDefaultLang('en');
    }
    // 
    this.userservice.shareValue.subscribe(res=>{
      if(res == "openform"){
        document.getElementById("openmodelbtn").click();
        // this.registerForm.patchValue({
        //   question:''
        // })
        this.registerForm.setValue({
          question:'',
          username:'',
          birthplace: '',
          gender: '',
          dob: '',
          birthtime: '',
          contact:''
        })
      }
    })
    this.userservice.shareQuestion.subscribe(res=>{
      if(res){
        document.getElementById("openmodelbtn").click();
        this.autofilledQue = res;
        // this.registerForm.patchValue({
        //   question:res
        // })
       
        this.registerForm.setValue({
          question:res,
          username:'',
          birthplace: '',
          gender: '',
          dob: '',
          birthtime: '',
          contact:''
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
// *************

useLanguage() {
  // language: string
  console.log('lg++')
  // this.translate.use(language);
  if(this.isLang == true){
    console.log('lg++ 11')
    this.isLang = false;
    this.translate.use('hn');
    localStorage.setItem('lgkey', 'hindi');
  }else{
    console.log('lg++ 22')
    this.isLang = true;
    this.translate.use('en');
    localStorage.setItem('lgkey', 'english');
  }
}
// **************
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

  successModal(successtemplate) {
    // this.registerForm.reset();
    // this.submitProcess = false;
    // this.registerForm.patchValue({
    //   gender:'Male'
    // })
    // this.registerForm.patchValue({
    //   question:''
    // })
    // this.submitted = false;
    this.modalRef = this.modalService.show(successtemplate);
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
  console.log('my ress',res);
  if(res){
    this.modalRef.hide()
    this.submitted = false;
    document.getElementById("openmodelsuccessbtn").click();
    // this.successModal('successtemplate');
    // document.getElementById("paybtn").click();
  }
})

    }
}
test(){
  // document.getElementById("openmodelsuccessbtn").click();
  // this.successModal('successtemplate');
}
getTest(){
 
  document.getElementById("paybtn").click();
}
  openNav() {
    document.getElementById("sidenavclose").style.marginLeft = "0px";
  }
  
   closeNav() {
    document.getElementById("sidenavclose").style.marginLeft= "-315px";
  }
  onRoute(){
    this.userservice.shareRoutes();
  
  }
}
