import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent{
  @Input('likesCount') likesCount:number;
  @Input('isActive') isActive:boolean;

  onClick(){
    this.likesCount += (this.likesCount)?-1:+1;
    this.isActive = !this.isActive;
  }

}
