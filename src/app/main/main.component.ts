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
  currIndex: number;

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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
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
        }, {
          date: {
            chatDate: '29-08-2020',
            time: {
              status: 'r',
              messages: {
                chatTime: '01:23',
                message: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
              }
            }
          }
        }, {
          date: {
            chatDate: '29-08-2020',
            time: {
              status: 's',
              messages: {
                chatTime: '01:23',
                message: 'Helo'
              }
            }
          }
        }, ]
      }, {
      name: 'Rohan',
      profilePic: 'https://api.adorable.io/avatars/20',
      chats: [{
        date: {
          chatDate: '29-08-2020',
          time: {
            status: 's',
            messages: {
              chatTime: '01:23',
              message: 'Hello'
            }
          }
        }
      }]
    },{
        name: 'Prajwal Agarwal Agarwal Prajwal',
        profilePic: 'https://api.adorable.io/avatars/40',
        chats: [{
          date: {
            chatDate: '29-08-2020',
            time: {
              status: 's',
              messages: {
                chatTime: '01:23',
                message: 'Hello'
              }
            }
          }
        }]
      }]
    };
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;

  }
  showMessage(person, index: number) {
    this.chats = person;
    this.currIndex = index;
  }

  addNewMessage(newMessageObject: any){
    this.userDetails.chatsHistory[this.currIndex].chats.push(newMessageObject);

    console.log(this.userDetails.chatsHistory[this.currIndex]);
  }
}
