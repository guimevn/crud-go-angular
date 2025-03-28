import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from './Product.service'

@Component({
  selector: 'product-delete',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <form ngNativeValidate method="post" (submit)="this.delete()">
            <div class="row">
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="product_id">Id</label>
                <input readonly id="product_id" name="id" class="form-control" value="{{product.Id}}" type="number" required />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="product_name">Name</label>
                <input readonly id="product_name" name="name" class="form-control" value="{{product.Name}}" maxlength="50" />
              </div>
              <div class="mb-3 col-md-6 col-lg-4">
                <label class="form-label" for="product_price">Price</label>
                <input readonly id="product_price" name="price" class="form-control" value="{{product.Price}}" type="number" />
              </div>
              <div class="col-12">
                <a class="btn btn-secondary" routerLink="/product">Cancel</a>
                <button class="btn btn-danger">Delete</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`
})
export class ProductDelete {
  
  product?: any = {}
  constructor(private router: Router, private route: ActivatedRoute, private ProductService: ProductService) { }
  
  ngOnInit() {
    this.get()
  }

  get() {
    return this.ProductService.delete(this.route.snapshot.params['id']).subscribe(data => {
      this.product = data
    }, e => {
      alert(e.error)
    })
  }

  delete() {
    this.ProductService.delete(this.route.snapshot.params['id'], this.product).subscribe(() => {
      this.router.navigateByUrl('/product')
    }, (e) => {
      alert(e.error)
    })
  }
}