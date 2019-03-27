import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pollutants',
  templateUrl: './pollutants.component.html',
  styleUrls: ['./pollutants.component.scss']
})
export class PollutantsComponent implements OnInit {
  @Input() input;
  constructor() {
  }

  ngOnInit() {
  }

}
