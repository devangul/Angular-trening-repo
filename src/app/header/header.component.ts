import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 time1:any;
 time2:any;
 rout = '';
  str = '';
  constructor() { }

  ngOnInit() {
setInterval(()=>{
let Peremenaya = new Date();
this.time1 = Peremenaya.toLocaleDateString()
let Peremenaya2 = [Peremenaya.getHours(),Peremenaya.getMinutes()]
let Peremenaya3 = Peremenaya2.toString().replace(",",":")
this.time2 = [Peremenaya3,Peremenaya.getSeconds()].toString().replace(",",":")
})
setInterval(()=>{

 let Peremenaya = window.location;
 this.rout = Peremenaya.pathname
})  

}
}
