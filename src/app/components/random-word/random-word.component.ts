import { Component, OnInit, Input } from '@angular/core';
import { WordService } from '../../services/word.service';

@Component({
  selector: 'app-random-word',
  template: '<span *ngIf="word">{{word}}</span><span *ngIf="!word"><strong><em>{{type}}</em></strong></span>',
  styles: []
})
export class RandomWordComponent implements OnInit {
  @Input() type: string;
  word: string;

  constructor(public wordsService: WordService) { }

  async ngOnInit() {
    this.word = await this.wordsService.getWord(this.type);
  }

}
