import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class UserService {
 shareValue = new BehaviorSubject('')
 shareQuestion = new BehaviorSubject('')
 sharenewRoutes = new BehaviorSubject('')
  constructor(private http: HttpClient) { 

  }



  shareData(){
    this.shareValue.next('openform');
  }
  shareRoutes(){
    this.sharenewRoutes.next('true');
    // return true;
    // getroute
    // this.sharenewRoutes.next(getroute);
  }
  askFilledque(getque){
    this.shareQuestion.next(getque)
  }
  submitUser(userDetil){

    let body = new URLSearchParams();
    body.set('name', userDetil.username);
    body.set('gender', userDetil.gender);
    body.set('contact_no', userDetil.contact);
    body.set('ques_title', userDetil.question);
    body.set('birth_place', userDetil.birthplace);
    body.set('dob', userDetil.dob);
    body.set('birth_time', userDetil.birthtime);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    return this.http.post('https://www.myshoetips.com/api/submit_new_user_ques',body.toString(),options);
  }

  getHoroscope(sign){
    const headers = new HttpHeaders({'X-RapidAPI-Key':'8a297ea211msh07620e157cee2e6p18f624jsn829f3a43c646'});
    let data = {}
    return this.http.post('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign='+sign+'&day=today',data,{ headers: headers });
  }
  getQuecategory(){
    return this.http.get('https://www.myshoetips.com/api/categories');  
  }
  getQuebycategory(catId){
    return this.http.get('https://www.myshoetips.com/api/category_questions?cat_id='+catId);  
  }
}
