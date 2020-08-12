import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {UserService} from 'src/app/_services/user.service';
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
  questionExist:boolean = true;
  constructor(private modalService: BsModalService,private userservice:UserService) { }
  askQuestion(question,questionthing,catId){
    this.questionExist = false;
    this.allQuestion = [];
    this.questionHeading = question;
    this.modalRef = this.modalService.show(questionthing);
  this.userservice.getQuebycategory(catId).subscribe((res:any)=>{
    if(res){
      res.map(value => {
        this.allQuestion.push(value);
      })
      this.questionExist = true;
    }    
    })
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
