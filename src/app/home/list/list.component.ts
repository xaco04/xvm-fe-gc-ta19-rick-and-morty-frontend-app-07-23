import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/crudcharacter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters?: Character[];
  currentCharacter?: Character = {} ;
  currentIndex = -1;
  name = '';
  editMode = false;
  editedCharacter: Character = {};

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.retrieveCharacters();
  }

  retrieveCharacters(): void {
    this.characterService.getAll().subscribe(
      data => {
        this.characters = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveCharacters();
    this.currentCharacter = {};
    this.currentIndex = -1;
    this.editMode = false;
    this.editedCharacter = {};
  }

  setActiveCharacter(character: Character, index: number): void {
    this.currentCharacter = character;
    this.currentIndex = index;
    this.editMode = false;
    this.editedCharacter = {};
  }

  deleteCharacter(id: number): void {
    this.characterService.delete(id).subscribe(
      response => {
        console.log(response);
        this.retrieveCharacters();
        if (this.currentCharacter?.id === id) {
          this.currentCharacter = {};
          this.currentIndex = -1;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  removeAllCharacters(): void {
    this.characterService.deleteAll().subscribe(
      response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
      }
    );
  }

  searchName(): void {
    this.currentCharacter = {};
    this.currentIndex = -1;
    this.characterService.findByName(this.name).subscribe(
      data => {
        this.characters = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  
}
