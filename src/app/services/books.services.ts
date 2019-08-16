import { Subject } from 'rxjs';
import { Book } from '../modeles/book.modele';
import * as firebase from 'firebase';

export class Books{


    booksLibrary = new Subject<any[]>()
    private books: Book[] = [
        {
            title: 'Shiba Inu',
            subtitle : 'Dog breed',
            image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                    bred for hunting`
        },
        {
            title: 'Shiba Inu',
            subtitle : 'Dog breed',
            image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
                    bred for hunting`
        },
    ]
    emitBooksSubject(){
        this.booksLibrary.next(this.books)
    }
    addBook(newBook : Book){
        this.books.push(newBook)
        this.saveBook()
        this.emitBooksSubject()
    }

    saveBook(){
        firebase.database().ref('/books').set(this.books)
    }
    getBooks(){
        firebase.database().ref('/books').on('value',(data)=>{
            this.books = data.val() ? data.val() : [];
            this.emitBooksSubject();
        })
    }
    getSingleBook(id: number){
        return new Promise((resolve, reject)=>{
            firebase.database().ref('/books/' + id).once('value').then((data)=>{
                resolve(data.val());
            },(error)=>{
                reject(error);
            })
        })
    }
    deleteBook= (book: Book)=>{
        if(book.image){
            const storageRef = firebase.storage().refFromURL(book.image);
            storageRef.delete().then(()=>{
                console.log('ohoto supprimée')
            }).catch((error)=>{
                console.log('fichier non trouvé: '+ error)
            })
        }
        const bookIndex = this.books.findIndex((bookEl)=>{
            if(bookEl=== book){
                return true;
            }
        })
        this.books.slice(bookIndex, 1);
        this.saveBook();
        this.emitBooksSubject();
    }
    uploadFile(file: File){
        return new Promise((resolve, reject)=>{
            const uniqueFileName = Date.now().toString();
            const upload= firebase.storage().ref()
                .child('images/' + uniqueFileName + file.name)
                .put(file)
            upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
                ()=>{
                    console.log('Chargement...')
                },(error)=>{
                    console.log('Erreur de chargement', error)
                },()=>{
                    resolve(upload.snapshot.downloadURL)
                })
        })
    }
}