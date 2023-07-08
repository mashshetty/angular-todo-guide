import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  constructor(private route: ActivatedRoute){

  }

   name : any = this.route.snapshot.paramMap.get('id');
   

  ngOnInit():void{
    console.warn("param value is", this.route.snapshot.params['id'])
  }
  

  
}
