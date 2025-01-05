import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductIndex } from './components/product/Index.component'
import { ProductCreate } from './components/product/Create.component'
import { ProductDetail } from './components/product/Detail.component'
import { ProductEdit } from './components/product/Edit.component'
import { ProductDelete } from './components/product/Delete.component'

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductIndex },
  { path: 'product/create', component: ProductCreate },
  { path: 'product/:id', component: ProductDetail },
  { path: 'product/edit/:id', component: ProductEdit },
  { path: 'product/delete/:id', component: ProductDelete }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }