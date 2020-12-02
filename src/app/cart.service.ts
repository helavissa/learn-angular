import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product){
    console.log('cart add');
    this.items.push(product);
  }

  getItems(){
    console.log('cart get items');
    return this.items;
  }

  clearCart() {
    console.log('cart clear');
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}
