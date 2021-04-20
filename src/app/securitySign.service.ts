import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecuritySignService {

  messages: string[] = [];

  add(message: string) {
    console.log("message: ", message);
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
