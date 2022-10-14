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
/** деление угломера */
export interface dyDTO {
  firs: string;
  last: string;
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
  _dy_DTO = <dyDTO>{};
  _distance_DTO:number=0

  dir_ygol: number = 0;
  

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
    // debugger;
    let op = this.convertToPoint(this.Op_Point);
    let cel = this.convertToPoint(this._cell);

    let xDelta = cel.x - op.x;
    let yDelta = cel.y - op.y;

    this._distance_DTO=this.getDistance(xDelta,yDelta);

    let rN = Math.abs(yDelta) / Math.abs(xDelta);

    let rumb = Math.atan(rN);
    //-----------1---
    if (xDelta <= 0 && yDelta <= 0) {
      this.dir_ygol = 180 + rumb;
     this._dy_DTO=this.convertTo_dyDTO(this.dir_ygol)
      this._flagViewState = StateView.show_rezilt;
      return;
    }
    //-----------2---
    if (xDelta <= 0 && yDelta >= 0) {
      this.dir_ygol = 180 - rumb;
      this._dy_DTO=this.convertTo_dyDTO(this.dir_ygol)
      this._flagViewState = StateView.show_rezilt;
      return;
    }
    //-----------3---
    if (xDelta >= 0 && yDelta <= 0) {
      this.dir_ygol = 360 - rumb;
      this._dy_DTO=this.convertTo_dyDTO(this.dir_ygol)
      this._flagViewState = StateView.show_rezilt;
      return;
    }

    //-----------4---

    if (xDelta >=0 && yDelta >= 0) {
      this.dir_ygol = rumb;
      this._dy_DTO=this.convertTo_dyDTO(this.dir_ygol)
      this._flagViewState = StateView.show_rezilt;
      return;
    }
  }

  private convertToPoint(d: PointDTO): Point {
    let x1 = +`${d.x_firs}${d.x_last}`;
    let y1 = +`${d.y_firs}${d.y_last}`;
    return <Point>{ x: x1, y: y1 };
  }

  private convertTo_dyDTO(g: number): dyDTO {
    let dyDTO = <dyDTO>{};

    let dy = (g / 6).toFixed(2); // для целого добавт 00
    let first;
    if (dy.length === 3) {
      first = '0' + dy.split('.')[0];
    } else {
      first = dy.split('.')[0];
    }

    dyDTO.firs = first;
    dyDTO.last = dy.split('.')[1];

    return dyDTO;
  }

  private getDistance(x:number,y:number):number{
    debugger
    let qx=Math.pow(x,2);
    let qy=Math.pow(y,3);
    let q=qx+qy;
    return Math.sqrt(Math.abs(q));
  }

  private convertToPointDTO(d: Point) {}

  saveOP() {
    this.Op_Point = this._op;
    this._flagViewState = StateView.cell;
  }

  undo() {
    this._flagViewState = StateView.cell;
  }
  goOP() {
    this._flagViewState = StateView.default;
  }
  clearOP() {
    if (this.myOpForm) {
      this.myOpForm.resetForm();
      this.Op_Point = <PointDTO>{};
    }
  }

  clearCell() {
    //  this._threeRowInput=[<PabInputDto>{},<PabInputDto>{},<PabInputDto>{}]
    if (this.myCellForm) {
      this.myCellForm.resetForm();
      this._cell=<PointDTO>{};
    }
  }
}
