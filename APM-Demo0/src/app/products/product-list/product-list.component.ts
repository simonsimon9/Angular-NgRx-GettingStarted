import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Product } from '../product';
import { getCurrentProduct, getProducts, getShowProductCode, State } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions'

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   currentProduct => this.selectedProduct = currentProduct
    // );
    this.products$ = this.store.select(getProducts);

    this.store.dispatch(ProductActions.loadProducts());

    this.selectedProduct$ = this.store.select(getCurrentProduct);

    //TODO: Unsubscribe
    this.displayCode$ = this.store.select(getShowProductCode);
    
  }

  
  checkChanged(): void {
    //this.displayCode = !this.displayCode;
    this.store.dispatch(
      ProductActions.toggleProductCode()
    );
  }

  newProduct(): void {
    //this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    //this.productService.changeSelectedProduct(product);
    this.store.dispatch(ProductActions.setCurrentProduct({product}))
  }

}
