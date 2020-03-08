import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService, private data: DataService) { }
  cartItems;
  ngOnInit() {
    this.cartItems = this.cart.cartItems;
  }
  remove(indx) {
    this.cart.cartItems.splice(indx, 1);
  }
  checkOut() {
    this.data.completeOrder(this.cartItems).subscribe(res => 
      { alert("Checkout Successful"); }
    )
  }

}
