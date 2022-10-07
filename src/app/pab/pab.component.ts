import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface PabInputDto {
  firstValue: string;
  lastValue: string;
  
}

@Component({
  selector: 'app-pab',
  templateUrl: './pab.component.html',
  styleUrls: ['./pab.component.scss']
})
export class PabComponent implements OnInit {

  @ViewChild('myOneTabForm', {static: false}) myOneTabForm: NgForm|undefined;

  selectedStatus:string ='-'; 

  _dirYgol:string='';

  _flag_sendData:boolean=false;

 _deltaPabInput:PabInputDto=<PabInputDto>{};
 _threeRowInput=[<PabInputDto>{},<PabInputDto>{},<PabInputDto>{}]

  constructor() { }

  ngOnInit(): void {
  }

  saveOneTab(form:NgForm){
   debugger
    let p1:number= +`${this._threeRowInput[0].firstValue}${this._threeRowInput[0].lastValue}`
    let p2:number= +`${this._threeRowInput[1].firstValue}${this._threeRowInput[1].lastValue}`
    let p3:number= +`${this._threeRowInput[2].firstValue}${this._threeRowInput[2].lastValue}`

    let sum=p1+p2+p3;
    let am =Math.round( sum/3);
    let dAm=0;
    if(this.selectedStatus!=null){
    dAm = +`${this.selectedStatus}${this._deltaPabInput.firstValue}${this._deltaPabInput.lastValue}`
    }
    else{
      dAm=+`${this._deltaPabInput.firstValue}${this._deltaPabInput.lastValue}`
    }

    console.log("dAm--"+dAm);

    let dy =am-dAm
     let dy_string =dy.toString();

     if(dy_string.length===1){
      this._dirYgol='00-0'+dy_string[0];
      this._flag_sendData=true;
      return;
     }

     if(dy_string.length===2){
      this._dirYgol='00-'+dy_string[0]+dy_string[1];
      this._flag_sendData=true;
      return;
     }
      
     if(dy_string.length===3){
      this._dirYgol='0'+dy_string[0]+'-'+dy_string[1]+dy_string[2];
      this._flag_sendData=true;
      return;
     }


     this._dirYgol= dy_string[0]+dy_string[1]+'-'+dy_string[2]+dy_string[3]

    this._flag_sendData=true;

  }

  undo(){
    this._flag_sendData=false;
  }

  clear(){
  //  this._threeRowInput=[<PabInputDto>{},<PabInputDto>{},<PabInputDto>{}]
  if(this.myOneTabForm){
    this.myOneTabForm.resetForm()
  }
  }

}
