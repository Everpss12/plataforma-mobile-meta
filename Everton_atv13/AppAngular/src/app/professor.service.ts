import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { professor } from './professor/professor';
import { PROFESSORES } from './professor/mock-professores'; 

import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; // Configuração  para o cabeçalho da aplicação ser enviado via JSON como a API espera

@Injectable()
export class ProfessorService {

  private professoresUrl = 'http://127.0.0.1:8000/api/professor';

  constructor(
  	private  http: HttpClient,
  	private messageService: MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      console.error(error); 
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }

  getProfessores(): Observable<Professor[]> {
  	
  	return this.http.get<Professor[]>(this.professoresUrl)
  	.pipe(
  		tap(heroes => this.log(`Carregando professores`)),
  		catchError(this.handleError('GetProfessores',[]))
  	);
  }

  getProfessores(id: number):  Observable<Professor> {

    const url = `${this.professoresUrl}/${id}/edit`;

    return this.http.get<Professor>(url)
    .pipe(
      tap(_=> this.log(`Buscando professor id=${id}`)), 
      catchError(this.handleError<Professor>(`Erro ao carregar professor id=${id}`))
     ); 
  }

  atualizarProfessor(professor: Professor): Observable<any> {

    const url = `${this.professoresUrl}/${professor.id}`;
    
    return this.http.put(url, professor, httpOptions).pipe(
      tap(_=> this.log(`Professor Atualizado id=${professor.id}`)),
      catchError(this.handleError<any>('Erroa ao atualizar Professor'))
    );
  }


  adicionarProfessor(professor: Professor): Observable<Professor> { 
    return this.http.post<Professor>(this.professoresUrl, professor,httpOptions)
    .pipe(
      tap((professor: Professor) => this.log(`Professor Adicionado com sucesso / id=${professor.id}`)),
      catchError(this.handleError<Professor>('Erro ao Adicionar um professor!'))
    );
  }

  deletarProfessor(professor: Professor):  Observable<any> {

      const id = typeof professor === 'number' ? professor : professor.id;
      const url = `${this.professoresUrl}/${id}`;

      return this.http.delete(url,httpOptions)
      .pipe(
        tap(_=> this.log(`Professor deletado com sucesso`)),
        catchError(this.handleError<any>('Erro ao deletar Professor'))
      );

  }

  buscarProfessor(term: string): Observable<Professor[]>{

    const url = `http://127.0.0.1:8000/api/buscar_professor?busca=${term}`;//Configura a url para fazer a busca

    if(!term.trim()){//Verifica se a busca está vazia
      return of([]);//se estiver vazia retorna uma lista em branco
    }
    return this.http.get<Professor[]>(url)//Envia a requisição via GET
    .pipe(
      tap(_=> this.log(`Professores encontrados pelo termo "${term}"`)),//Insere uma mensagem caso a busca dê certo
      catchError(this.handleError<Professor[]>('Erro ao encontrar Professor',[]))//Insere uma mensagem caso ocorra algum erro
    );
  }//Método para fazer a busca na nossa API

  private log(mensagem: string) {
  	this.messageService.add('Info: ' + mensagem);
  }

}