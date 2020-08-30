import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.css']
})
export class ChatLayoutComponent implements OnInit {

  @Input() database: any;

  constructor() {
    console.log(this.database);
  }

  ngOnInit(): void {
    console.log(this.database);
  }

}
