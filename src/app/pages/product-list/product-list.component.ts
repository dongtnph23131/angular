import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = []
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }
  removeHandler(id: any) {
    if (confirm('Bạn có muốn xóa không ?')) {
      this.productService.deleteProductById(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id)
      })
    }
  }
}
