import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angcalk';
 

  calcForm: any = {
    first: 0,
    second: 0
  }

  add(first,second){
    return first + second;
  }
  remove(first,second){
    return first - second;
  }

  mul(first,second){
    return first * second;
  }
  div(first,second){
    if(second == 0){
      return "Error. Cannot divide by 0";
    }else{
      return first / second;
    }
  }


}

