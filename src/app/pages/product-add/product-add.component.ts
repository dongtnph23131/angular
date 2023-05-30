import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interfaces/product';
import {Router} from "@angular/router"
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    description: ['']
  })
  constructor(private formBuilder: FormBuilder, private productService: ProductService,private router:Router) {

  }
  addHandler() {
    const product: IProduct = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      description: this.productForm.value.description || "",
    }
    this.productService.addProduct(product).subscribe(product => {
      this.router.navigate(["products"])
    })
  }
}
