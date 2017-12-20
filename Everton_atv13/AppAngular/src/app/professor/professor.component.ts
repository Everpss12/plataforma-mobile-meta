import { Component, OnInit } from '@angular/core';

import { Professor } from './professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professores: Professor[];
  
  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.getProfessor();
  }
  
  getProfessores() :void {
    this.professorService.getProfessores()
    .subscribe(professores => this.professores = professores);
  }

  adicionar(nome: string): void {
    nome = nome.trim();
    if(!nome) {return ;} 
    this.professorService.adicionarProfessor({nome} as Professor)
    .subscribe(professor => {
      this.professores.push(professor);
    })
  }

  delete(professor: Professor): void {
    this.professores = this.professores.filter(a => a !== professor); // atualiza lista de professores
    this.professorService.deletarProfessor(professor).subscribe(); //chama o método deletarProfessor de professorService passando o professor a ser deletado!
  }
}