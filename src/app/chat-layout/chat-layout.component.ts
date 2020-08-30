import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.css']
})
export class ChatLayoutComponent implements OnInit {

  @Input() database: any;
  newMessage: string;

  @Output() addMessageEvent = new EventEmitter<any>();

  constructor() {
    console.log(this.database);
    this.newMessage = 'Enter Message';
  }

  ngOnInit(): void {
    console.log(this.database);
  }

  addMessage() {
    const currentDate = new Date();

    const newChat = {
      date: {
        chatDate: currentDate.getDate(),
        time: {
          status: 's',
          messages: {
            chatTime: currentDate.getTime(),
            message: this.newMessage
          }
        }
      }
    };
    this.addMessageEvent.emit(newChat);
  }
}
