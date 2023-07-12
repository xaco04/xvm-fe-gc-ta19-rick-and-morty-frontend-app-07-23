import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-listapers',
  templateUrl: './listapers.component.html',
  styleUrls: ['./listapers.component.css']
})
export class ListapersComponent implements OnInit {
  characters: any[] = [];
  selectedCharacter: any = null;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe(
      (response) => {
        this.characters = response.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showDetails(character: any) {
    this.selectedCharacter = character;
  }

  hideDetails() {
    this.selectedCharacter = null;
  }
}