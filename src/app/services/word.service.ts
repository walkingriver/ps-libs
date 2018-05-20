import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() { }

  getWord(type: string) {
    const num = Math.floor(Math.random() * 100);
    return `${type}-${num}`;
  }
}
