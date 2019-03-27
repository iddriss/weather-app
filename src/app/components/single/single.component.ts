import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  @Input() input;

  constructor() {
   }

  ngOnInit() {
  }

}
