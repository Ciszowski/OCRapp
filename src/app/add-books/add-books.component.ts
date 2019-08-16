import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../modeles/book.modele';
import { Books } from '../services/books.services';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  bookForm : FormGroup;

  fileProcess = false;
  fileUploaded = false;

  fileUrl: string;
  constructor(private formBuilder: FormBuilder,
                private router: Router,
                private bookServices : Books){}

  ngOnInit() {
    this.initForm()
  }
  initForm(){
    this.bookForm = this.formBuilder.group({
      title : ['', Validators.required],     
      subtitle : ['', Validators.required],
      content : ['', Validators.required],
    })
  }
  onSubmitBook(){
    const formValue = this.bookForm.value;
    const newBook = new Book(
      formValue['title'],
      formValue['subtitle'],
      formValue['content'],
    )
      if(this.fileUrl && this.fileUrl !== ''){
        newBook.image= this.fileUrl;
      }
      this.bookServices.addBook(newBook)
      this.router.navigate(['books'])
  }

  onUploadFile(file: File){
    this.fileProcess = true;
    this.bookServices.uploadFile(file).then((url: string)=>{
      this.fileUrl = url;
      this.fileProcess = false;
      this.fileUploaded = true;
    })
  }
  detectedFile(event){
    this.onUploadFile(event.target.files[0]);
  }
}
