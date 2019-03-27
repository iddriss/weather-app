import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { } from 'rxjs/operators/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weather: Observable<any[]>;

  summary;
  pollutant: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.weather = db.collection('weather').valueChanges();
    this.pollutant = db.collection('pollutant').valueChanges();
    this.weather.subscribe(data => this.summary = data.filter(item => item.quick === true));
  }

  ngOnInit() {
  }

}
