import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  navbarOpen = false;
  search: string;
  userDetails: any;
  chats: any;

  constructor() {

    this.userDetails = {
      userName: 'Sohan',
      userProfilePic: 'https://api.adorable.io/avatars/30',
      chatsHistory: [{
        name: 'Prajwal',
        profilePic: 'https://api.adorable.io/avatars/10',
        chats: [{
          date: {
            chatDate: '29-08-2020',
            time: {
              status: 'r',
              messages: {
                chatTime: '01:23',
                message: 'Hii'
              }
            }
          }
        }]
      }, {
      name: 'Rohan',
      profilePic: 'https://api.adorable.io/avatars/20',
      chats: {
        date: {
          chatDate: '29-08-2020',
          time: {
            status: 'r',
            messages: {
              chatTime: '01:23',
              message: 'Hii'
            }
          }
        }
      }
    }]
    };
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;

  }
  showMessage(person) {
    this.chats = person;
  }
}
