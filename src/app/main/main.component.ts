import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  navbarOpen = false;
  messageDatabase: any;
  search: string;

  constructor() {
    this.messageDatabase = [{
      name: 'Prajwal',
      profilePic: 'https://api.adorable.io/avatars/10',
      chats: {
        date: {
          chatDate: '29-08-2020',
          time: {
            chatTime: '01:23',
            messages: {
              status: 'r',
              message: 'Hii'
            }
          }
        }
      }
    }, {
      name: 'Rohan',
      profilePic: 'https://api.adorable.io/avatars/20',
      chats: {
        date: {
          chatDate: '29-08-2020',
          time: {
            chatTime: '01:23',
            messages: {
              status: 'r',
              message: 'Hii'
            }
          }
        }
      }
    }];
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;

  }
}
