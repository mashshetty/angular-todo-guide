import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() datapass:any;
  @Output() getdata : EventEmitter<any>= new EventEmitter()
  

ngOnInit(): void {
    this.getdata.emit("mash")
}

}
