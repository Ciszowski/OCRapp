import { Component, OnInit, OnDestroy } from '@angular/core';
import { Books } from '../services/books.services';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import  { Book } from '../modeles/book.modele';
@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.css']
})
export class BooksLibraryComponent implements OnInit,OnDestroy {

  books: Book[];
  bookSubscribe : Subscription;

  constructor(private bookService: Books,
              private router: Router){}

  ngOnInit() {
    this.bookSubscribe = this.bookService.booksLibrary.subscribe(
      (book: Book[]) =>{
        this.books = book;
      }
    )
    this.bookService.getBooks();
    this.bookService.emitBooksSubject()
  }
  onNewBook(){
    this.router.navigate(['addBooks'])
  }
  onDeleteBook(book: Book){
    this.bookService.deleteBook(book)
  }

  onViewBook(id: number){
    this.router.navigate(['/books', 'view',id])
  }
  ngOnDestroy(){
    this.bookSubscribe.unsubscribe()
  }




}
