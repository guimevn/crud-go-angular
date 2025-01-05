import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppInterceptor } from './app.interceptor'

import { ProductIndex } from './components/product/Index.component'
import { ProductCreate } from './components/product/Create.component'
import { ProductDetail } from './components/product/Detail.component'
import { ProductEdit } from './components/product/Edit.component'
import { ProductDelete } from './components/product/Delete.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductIndex,
    ProductCreate,
    ProductDetail,
    ProductEdit,
    ProductDelete,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }