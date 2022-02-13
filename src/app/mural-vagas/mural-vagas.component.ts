import { VagasService } from './../vagas.service';
import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){
    this._vagasService.getVagas()
      .subscribe(
        retonraVaga => {
          this.vagas = retonraVaga.map(
            item => {
              return new Vaga();
            })
        }
      )
  }

}
