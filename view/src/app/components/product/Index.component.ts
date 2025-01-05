import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { ProductService } from './Product.service'

@Component({
  selector: 'product-index',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let product of products">
                <td class="text-center">{{product.Id}}</td>
                <td>{{product.Name}}</td>
                <td class="text-center">{{product.Price | currency:'BRL':'symbol':'1.2-2'}}</td>
                <td class="text-center">
                  <a class="btn btn-secondary" routerLink="/product/{{product.Id}}" title="Visualizar"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-primary" routerLink="/product/edit/{{product.Id}}" title="Editar"><i class="fa fa-pencil"></i></a>
                  <a class="btn btn-danger" routerLink="/product/delete/{{product.Id}}" title="Deletar"><i class="fa fa-times"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
          <a class="btn btn-primary" routerLink="/product/create">Criar</a>
        </div>
      </div>
    </div>`
})

export class ProductIndex {

  products?: any[]
  constructor(public router: Router, private ProductService: ProductService) { }

  ngOnInit() {
    this.get()
  }
  
  get() {
    this.ProductService.get().subscribe(data => {
      this.products = data
    }, e => {
      alert(e.error)
    })
  }
}