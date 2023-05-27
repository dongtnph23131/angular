import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductAddComponent } from './pages/product-add/product-add.component'
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { ProductEditComponent } from './pages/product-edit/product-edit.component'
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
