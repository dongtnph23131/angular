import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

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
    if (confirm('Bạn có muốn xóa không?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        console.log('Xóa sản phẩm thành công');
         this.products=this.products.filter(product=>product.id!==id)
      }) 
    }
  }
}
