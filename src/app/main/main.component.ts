import { Component, OnInit } from '@angular/core';
import * as faker from 'faker/locale/en';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {forEachComment} from 'tslint';

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
  newPerson = faComments;



  constructor() {

    this.userDetails = this.createData();
    this.search = '';
  }

  ngOnInit(): void {
  }

  createData(){


      const user = {
        userName: faker.fake(faker.name.firstName() + faker.name.lastName()),
        userPhotoURL: 'https://api.adorable.io/avatars/' + faker.random.number(1000),
        chatHistory: []
      };

      for (let i = 0; i < 10; i++) {

      const newChat = {
        name: faker.fake(faker.name.firstName() + faker.name.lastName()),
        photoURL: 'https://api.adorable.io/avatars/' + faker.random.number(1000),
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

  searchOrAdd(){
    // tslint:disable-next-line:triple-equals
    if (this.search.length == 0){
      this.userDetails.chatHistory.unshift({
        name: faker.fake(faker.name.firstName() + faker.name.lastName()),
        photoURL: 'https://api.adorable.io/avatars/' + faker.random.number(1000),
        chats: []
      });
    }else {
      this.userDetails.chatHistory.unshift({
        name: this.search,
        photoURL: 'https://api.adorable.io/avatars/' + faker.random.number(1000),
        chats: []
      });
    }
  }
}
