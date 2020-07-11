import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Observable<any[]>

  constructor(private firestore: AngularFirestore) { }

  imgLink = "../../assets/imagejoel.jpg";

  ngOnInit(): void {
    this.items = this.firestore.collection('Data').valueChanges();
  }

}
