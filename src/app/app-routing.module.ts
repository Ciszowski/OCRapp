import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksLibraryComponent } from './books-library/books-library.component';
import { AccueilComponent } from './accueil/accueil.component';
import { authServices } from './services/auth.services';
import { AddBooksComponent } from './add-books/add-books.component';
import { SingleViewComponent } from './books-library/single-view/single-view.component';



const routes: Routes = [
  {path: 'acceuil', component: AccueilComponent},
  {path: 'books',canActivate:[authServices], component: BooksLibraryComponent },
  {path: 'addBooks',canActivate:[authServices], component: AddBooksComponent },
  {path: "books/view/:id", canActivate:[authServices] , component: SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
