import { Component, OnInit } from '@angular/core';
import { Book } from '../../modeles/book.modele';
import { Router, ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/services/books.services';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  book: Book;
  constructor(private router : Router,
                private bookService : Books,
                private route : ActivatedRoute) { } 

  ngOnInit() {
    this.book = new Book('','','');
    const id= this.route.snapshot.params['id']
    this.bookService.getSingleBook(+id).then((book: Book)=>{
      this.book= book;
    })
    
    console.log('je rentre dans single view', this.book)
  }
  onBack=()=>{
    this.router.navigate(['/books'])
  }
}
