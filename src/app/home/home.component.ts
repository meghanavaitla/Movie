import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies;
  constructor(private data:DataService,private cart:CartService) { }

  ngOnInit() {
    this.data.getMovies().subscribe(d => {
      this.movies = d;
    });
  }

  buy(idx){
    var movie = this.movies[idx];
    alert(movie.title);
  }

  addItem(idx){

    var movie = this.movies[idx];
    this.cart.cartItems.push(movie);
    
  }

}
