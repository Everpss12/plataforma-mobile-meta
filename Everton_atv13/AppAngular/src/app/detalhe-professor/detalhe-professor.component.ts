import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common';

import { Professor } from '../professor/professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-detalhe-professor',
  templateUrl: './detalhe-professor.component.html',
  styleUrls: ['./detalhe-professor.component.css']
})
export class DetalheProfessorComponent implements OnInit {

  @Input() professor: Professor;

  constructor(
  	private route: ActivatedRoute,
  	private professorService: ProfessorService,
  	private location: Location) { } 

  ngOnInit() {
  	this.getProfessor();
  }

  getAluno(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.professorService.getProfessor(id)
	    .subscribe(professor => this.professor = professor);
  }

  goBack(): void {
  	this.location.back();
  }

  salvar(): void {
    this.professorService.atualizarProfessor(this.professor)
    .subscribe(() => this.goBack());
  } // Método que passará o os dados do aluno a ser atualizado para o ProfessorService

}