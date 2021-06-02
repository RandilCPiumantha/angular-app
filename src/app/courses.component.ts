import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
            <!-- <h2>{{ title }}</h2>
            <ul>
              <li *ngFor="let course of courses">
                {{ course }}
              </li>
            </ul>
            <img [src]="imageUrl"/> -->
            <div (click) = "onDivClicked()">
            <button class="btn btn-primary" (click) = "onSave($event)">Save</button>
            </div>
            <input [(ngModel)]= "email" (keyup.enter) = onKeyUp()><br/>
            {{course.title |lowercase | uppercase}}<br/>
            {{course.students | number}}<br/>
            {{course.rating | number: "1.1-1"}}<br/>
            {{course.price |currency : "USD":false }}<br/>
            {{course.relaseDate |date }}<br/>
            {{text | summary: 10}}
            `
})

export class CoursesComponent{
  courses;
  isActive = true;
  email = "example@domain.com";
  text = "In its original meaning, a hacker was an explorer, a risk taker, someone who was trying to make a system do something it had never done before. Hackers in this sense of the word abounded at MIT’s Tech Model Railroad Club in the 1950s and 1960s In its original meaning, a hacker was an explorer, a risk taker, someone who was trying to make a system do something it had never done before. Hackers in this sense of the word abounded at MIT’s Tech Model Railroad Club in the 1950s and 1960s In its original meaning, a hacker was an explorer, a risk taker, someone who was trying to make a system do something it had never done before. Hackers in this sense of the word abounded at MIT’s Tech Model Railroad Club in the 1950s and 1960s In its original meaning, a hacker was an explorer, a risk taker, someone who was trying to make a system do something it had never done before. Hackers in this sense of the word abounded at MIT’s Tech Model Railroad Club in the 1950s and 1960s";


  course = {
    title :"Computer Science",
    students:134564,
    rating:4.9764,
    price:190.50,
    relaseDate: new Date(2021,4,1),
  }

  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  onDivClicked(){
    console.log("Div was clicked");
  }

  onKeyUp(){
    console.log(this.email);
  }

  // title = "List of Courses";
  // imageUrl = "http://lorempixel.com/400/200";

  constructor(service: CoursesService){
    this.courses = service.getCourse();
  }
}
