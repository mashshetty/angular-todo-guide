import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  datapass:string = 'data pass from parent to child';
  propfromchild:string =''
  getdata(data:any):void{
      console.warn(data)
      this.propfromchild = data
  }
}
