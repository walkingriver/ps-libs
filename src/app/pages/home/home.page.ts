import { Component } from '@angular/core';
import { WordTypes } from '../../word-types.enum';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  wordTypes = WordTypes;
}
