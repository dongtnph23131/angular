import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms"
import { IProduct } from 'src/app/interfaces/product';
import { Router } from "@angular/router"
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    description: ['']
  })
  product!: IProduct
  constructor(private productService: ProductService, private formBuilder: FormBuilder, private router: ActivatedRoute,private routerNext :Router) {
    this.router.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getProductById(id).subscribe(product => {
        this.product = product
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          description: product.description
        })
      })
    })
  }
  updateHandler() {
    const newProduct: IProduct = {
      id: this.product.id,
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      description: this.productForm.value.description || ""
    }
    this.productService.updateProduct(newProduct).subscribe(product => {
      console.log(product);
      this.routerNext.navigate(["/products"])
    })
  }
} 
