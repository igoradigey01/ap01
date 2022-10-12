import { Component, OnInit ,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Point {
  x: string;
  y: string;
}
export interface PointDTO {
  x_firs: string;
  x_last:string;
  y_firs: string;
  y_last:string;
}
export enum StateView {
  default=0,
  edit_op=1,  
  cell=2,
  show_rezilt=3

}
  

@Component({
  selector: 'app-ogz',
  templateUrl: './ogz.component.html',
  styleUrls: ['./ogz.component.scss']
})
export class OgzComponent implements OnInit {

  @ViewChild('myCellForm', {static: false}) myCellForm: NgForm|undefined;
  _flag_sendData:boolean=false;
  _flagViewState:StateView=StateView.default;

  _op:PointDTO=<PointDTO>{}

  //-------------------
  _deltaPabInput:any;
  _threeRowInput:any;
  selectedStatus:string ='-'; 

  _dirYgol:string='';


  constructor() { }

  ngOnInit(): void {
  }

  editOP(){
    this._flagViewState=StateView.edit_op;
  }
  calculeteData(){
    this._flagViewState=StateView.show_rezilt;

  }  

  saveOP(){
    this._flagViewState=StateView.cell;

  }

  undo(){
    this._flagViewState=StateView.cell;

  }

  clear(){
  //  this._threeRowInput=[<PabInputDto>{},<PabInputDto>{},<PabInputDto>{}]
  if(this.myCellForm){
    this.myCellForm.resetForm()
  }
  }

  private set A_Point(a:Point){}
  

}
