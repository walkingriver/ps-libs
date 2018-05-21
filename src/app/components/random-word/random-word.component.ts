import { Component, OnInit, Input } from '@angular/core';
import { WordService } from '../../services/word.service';
import { IWord } from '../../iword';
import { WordTypes } from '../../word-types.enum';

@Component({
  selector: 'app-random-word',
  template: `<span *ngIf="word">
  <strong><em>{{word.label}}</em></strong>
  </span>
  <span *ngIf="!word"><strong><em>{{type}}</em></strong>
  </span>`,
  styles: []
})
export class RandomWordComponent implements OnInit {
  @Input() type: WordTypes;
  word: IWord;

  constructor(public wordsService: WordService) { }

  async ngOnInit() {
    this.word = await this.wordsService.getWord(this.type);
  }

}
