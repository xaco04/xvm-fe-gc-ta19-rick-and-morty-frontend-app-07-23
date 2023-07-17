import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/crudcharacter.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: { name: '', url: '' }, // Asignar un objeto vacío
    location: { name: '', url: '' }, // Asignar un objeto vacío
    image: ''
  };
  submitted = false

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {

  }
  saveCharacter(): void {
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image
    };

    this.characterService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCharacter(): void {
    this.submitted = false;
    this.character = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: { name: '', url: '' }, // Asignar un objeto vacío
      location: { name: '', url: '' }, // Asignar un objeto vacío
      image: ''
    };

  }

}
