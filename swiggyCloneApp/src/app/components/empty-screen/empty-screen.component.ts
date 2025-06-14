import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  standalone: false,
  styleUrls: ['./empty-screen.component.scss'],
})
export class EmptyScreenComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {}

}
