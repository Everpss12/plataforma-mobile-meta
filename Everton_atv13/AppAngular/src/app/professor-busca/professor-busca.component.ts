import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Professor } from '../professor/professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-busca',
  templateUrl: './professor-busca.component.html',
  styleUrls: [ './professor-busca.component.css' ]
})
export class ProfessorBuscaComponent implements OnInit {

  professores$: Observable<Professor[]>; //Note a declaração dos professores$ $ como um Observable

  private termBusca = new Subject<string>(); //A propriedade termBusca é declarada como um Subject da biblioteca RxJS

  constructor(private professorService: ProfessorService) {}

  // passe o termo de pesquisa para o fluxo observável.
  buscar(term: string): void {
    this.termBusca.next(term);
  }

  ngOnInit(): void {
    this.professores$ = this.termBusca.pipe(
      // Aguarde 300 ms após cada pressionamento de tecla antes de considerar o termo
      debounceTime(300),

      // ignore um novo termo se for o mesmo que o termo anterior
      distinctUntilChanged(),

      // mudar para nova pesquisa observável cada vez que o termo mudar
      switchMap((term: string) => this.professorService.buscarProfessor(term)),
    );
  }
}