import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
// import {faArrowRIght} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.css']
})
export class ChatLayoutComponent implements OnInit {

  @Input() database: any;
  newMessage: string;
  faArrowRight = faArrowRight;

  @Output() addMessageEvent = new EventEmitter<any>();
  faArrowLeft = faArrowLeft;

  constructor() {
    this.newMessage = '';
  }

  ngOnInit(): void {
 }

  addMessage() {
    const currentDate = new Date();

    const newChat = {
      status: 's',
      message: this.newMessage
    };
    this.addMessageEvent.emit(newChat);

    this.newMessage = '';

  }
}
