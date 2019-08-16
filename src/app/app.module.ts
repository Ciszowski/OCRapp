import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//material
import { MaterialModule } from './material/material.module';

//services
import { authServices } from './services/auth.services';
import { Books } from './services/books.services';

//Component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BooksLibraryComponent } from './books-library/books-library.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { SingleViewComponent } from './books-library/single-view/single-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksLibraryComponent,
    AccueilComponent,
    AddBooksComponent,
    SingleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    authServices,
    Books,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
