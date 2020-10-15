import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  whishList: number[] = []

  constructor(
    private productService: ProductService,
    private wishlilstService: WishlistService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  loadWishlist() {
    this.wishlilstService.getWishlist().subscribe(productIds => this.whishList = productIds)
  }

}
