import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Point {
  x: number;
  y: number;
}
export interface PointDTO {
  x_firs: string;
  x_last: string;
  y_firs: string;
  y_last: string;
}
export enum StateView {
  default = 0,
  edit_op = 1,
  cell = 2,
  show_rezilt = 3,
}

@Component({
  selector: 'app-ogz',
  templateUrl: './ogz.component.html',
  styleUrls: ['./ogz.component.scss'],
})
export class OgzComponent implements OnInit {
  @ViewChild('myCellForm', { static: false }) myCellForm: NgForm | undefined;
  @ViewChild('myOpForm', { static: false }) myOpForm: NgForm | undefined;
  _flag_sendData: boolean = false;
  _flagViewState: StateView = StateView.default;

  _op: PointDTO = <PointDTO>{};

  _cell: PointDTO = <PointDTO>{};

  dir_ygol:number=0

  //-------------------

  public set Op_Point(a: PointDTO) {
    localStorage.setItem('op', JSON.stringify(a));
  }
  public get Op_Point(): PointDTO {
    let op = localStorage.getItem('op');
    if (op != null) return JSON.parse(op);
    return <PointDTO>{};
  }

  constructor() {}

  ngOnInit(): void {
    this._op = this.Op_Point;
  }

  calculeteData() {
       debugger
   let op=this.getPoint(this.Op_Point);
   let cel= this.getPoint(this._cell);
   
  let xDelta = cel.x-op.x;
  let yDelta = cel.y -op.y;
         
  let rN=Math.abs(yDelta)/Math.abs(xDelta);

  let rumb=Math.atan(rN);

  if(xDelta<0&&yDelta<0){
     this.dir_ygol=180+rumb;

    this._flagViewState = StateView.show_rezilt;
    return
  }

  if(xDelta<0&&yDelta>0){
    this.dir_ygol=180-rumb;

   this._flagViewState = StateView.show_rezilt;
   return
 }

 if(xDelta>0&&yDelta<0){
  this.dir_ygol=360-rumb;

 this._flagViewState = StateView.show_rezilt;
 return
}



    
  }

  private getPoint(d:PointDTO):Point{
  let x1 = + `${d.x_firs}${d.x_last}`
  let y1 = + `${d.y_firs}${d.y_last}`
    return <Point>{x:x1,y:y1};
  }

  saveOP() {
    this.Op_Point = this._op;
    this._flagViewState = StateView.cell;
  }

  undo() {
    this._flagViewState = StateView.cell;
  }
  goOP(){
    this._flagViewState = StateView.default;

  }
  clearOP() {
    if (this.myOpForm) {
      this.myOpForm.resetForm();
      this.Op_Point=<PointDTO>{}
    }
  }

  clearCell() {
    //  this._threeRowInput=[<PabInputDto>{},<PabInputDto>{},<PabInputDto>{}]
    if (this.myCellForm) {
      this.myCellForm.resetForm();
    }
  }
}
