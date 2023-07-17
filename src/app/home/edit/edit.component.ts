import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/crudcharacter.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: { name: '', url: '' },
    location: { name: '', url: '' },
    image: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.loadCharacter();
  }

  loadCharacter(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.getById(parseInt(id, 10)).subscribe(
        data => {
          this.character = data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  saveCharacter(): void {
    this.characterService.update(this.character.id, this.character).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['../list']); // Redirige de nuevo a la lista después de guardar
      },
      error => {
        console.log(error);
      }
    );
  }
}
