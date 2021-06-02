import { Component } from '@angular/core';
// import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  viewMode = 'map';

  courses = [1, 2];
  title:string;
  post = {
    title: 'Titile',
    isFavorite: true
  }
  tweet = {
    body:'Here is the body of the tweet ..',
    isLiked:false,
    likesCount:0
  }

  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
  //   console.log("Favorite Changed", eventArgs);
  // }
}
