import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {UserService} from 'src/app/_services/user.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  modalRef: BsModalRef;
  questionHeading;
  questionApi = [];
  allQuestion = [];
  questions = [];
  questionExist:boolean = true;
  constructor(private modalService: BsModalService,private userservice:UserService,private translate: TranslateService) { 
    translate.get('QuestionTag.data').subscribe(
      values => {
        this.questions = Object.keys(values).map(key =>
          console.log('7770', values[key])
          //  values[key]
           );
      }
   ); 
  
  }
 
  askQuestion(question,questionthing,catId){
    console.log('catt', catId)
    this.questionExist = false;
    this.allQuestion = [];
    this.questionHeading = question;
    this.modalRef = this.modalService.show(questionthing);
  // this.userservice.getQuebycategory(catId).subscribe((res:any)=>{
  //   if(res){
  //     res.map(value => {
  //       this.allQuestion.push(value);
  //     })
  //     this.questionExist = true;
  //   }    
  //   })
  this.translate.get('Questions.data').subscribe(
    values => {
      this.questions = Object.keys(values).map(key =>
         values[key]
         );
         if( this.questions.length>0){
          this.questions.forEach(val=>{
            if(val.uniid == catId){
              val.que_detail.forEach(element => {
                this.allQuestion.push(element)
                console.log('Questions', element)
                this.questionExist = true;
              });
            }
           
          })
         }
    }
 ); 
  }

  askAdded(getque){
    this.modalRef.hide();
    this.userservice.askFilledque(getque.target.innerText);
  }
  ngOnInit() {
    this.questionApi = []
  this.userservice.getQuecategory().subscribe((res:any)=>{
  if(res){
    res.map(value => {
      this.questionApi.push(value);
    })
  }    
  })

  }

}
