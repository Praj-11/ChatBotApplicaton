import { Component, OnInit } from '@angular/core';
import * as faker from 'faker/locale/en';

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
  currIndex: number;


  constructor() {

    this.userDetails = this.createData();

    console.log(this.userDetails);
  }

  ngOnInit(): void {
  }

  createData(){

      let randomNumber = Math.floor(Math.random() * 1000);

      const user = {
        userName: faker.fake(faker.name.firstName() + faker.name.lastName()),
        userPhotoURL: 'https://api.adorable.io/avatars/' + randomNumber,
        chatHistory: []
      };

      for (let i = 0; i < 20; i++) {
      randomNumber = Math.floor(Math.random() * 1000);

      const newChat = {
        name: faker.fake(faker.name.firstName() + faker.name.lastName()),
        photoURL: 'https://api.adorable.io/avatars/' + randomNumber,
        chats: []
      };
      for (let j = 0; j < 10; j++) {
        newChat.chats.push({
          status: 's',
          message: faker.lorem.text(1)
        });
      }
      for (let j = 0; j < 10; j++) {
          newChat.chats.push({
            status: 'r',
            message: faker.lorem.text(1)
          });
        }

      user.chatHistory.push(newChat);
    }


      return user;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;

  }
  showMessage(person, index: number) {
    this.chats = person;
    this.currIndex = index;
  }

  addNewMessage(newMessageObject: any){
    this.userDetails.chatHistory[this.currIndex].chats.push(newMessageObject);
    this.addDummyMessage(this.currIndex);
    console.log(this.userDetails.chatHistory[this.currIndex]);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

addDummyMessage(index){
    const dummyMessage = {
      status: 'r',
      message: faker.lorem.text(1)
    };

    this.userDetails.chatHistory[this.currIndex].chats.push(dummyMessage);

  }
}
