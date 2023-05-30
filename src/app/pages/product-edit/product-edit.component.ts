import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interfaces/product';
import { ActivatedRoute } from "@angular/router"
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    description: ['']
  })
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: ActivatedRoute,private routerNext:Router) {
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
    const product: IProduct = {
      id: this.product.id,
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      description: this.productForm.value.description || "",
    }
    this.productService.updateProduct(product).subscribe(()=>{
       this.routerNext.navigate(["products"])
    })
  }
}
