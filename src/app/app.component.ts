import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OCRApp';
  constructor(private route : Router){
    var firebaseConfig = {
      apiKey: "AIzaSyD0hP3tNhM9geR0YrFYQMgwjKEsSSlm7lE",
      authDomain: "ocrapp-39aa7.firebaseapp.com",
      databaseURL: "https://ocrapp-39aa7.firebaseio.com",
      projectId: "ocrapp-39aa7",
      storageBucket: "",
      messagingSenderId: "650154848502",
      appId: "1:650154848502:web:8e18600809520dc3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  ngOnInit(){
    this.route.navigate(['acceuil'])
  }
}
