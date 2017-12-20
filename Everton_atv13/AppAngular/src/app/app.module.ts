  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';


  import { AppComponent } from './app.component';
  import { AlunoComponent } from './aluno/aluno.component';
  import { DetalheAlunoComponent } from './detalhe-aluno/detalhe-aluno.component';

  import { AlunoService } from './aluno.service';
  import { MessageService } from './message.service';
  import { MessagesComponent } from './messages/messages.component';
  import { AppRoutingModule } from './/app-routing.module';
  import { DashboardComponent } from './dashboard/dashboard.component';
  import { AlunoBuscaComponent } from './aluno-busca/aluno-busca.component';// Faça a importação automática do componente criado!

  @NgModule({
    declarations: [
      AppComponent,
      AlunoComponent,
      DetalheAlunoComponent,
      MessagesComponent,
      DashboardComponent,
      AlunoBuscaComponent// Adição automática do componente criado!
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule
    ],
    providers: [ AlunoService, MessageService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }




   


  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';


  import { AppComponent } from './app.component';
  import { ProfessorComponent } from './professor/professor.component';
  import { DetalheProfessorComponent } from './detalhe-professor/detalhe-professor.component';

  import { ProfessorService } from './professor.service';
  import { MessageService } from './message.service';
  import { MessagesComponent } from './messages/messages.component';
  import { AppRoutingModule } from './/app-routing.module';
  import { DashboardComponent } from './dashboard/dashboard.component';
  import { ProfessorBuscaComponent } from './professor-busca/professor-busca.component';// Faça a importação automática do componente criado!

  @NgModule({
    declarations: [
      AppComponent,
      ProfessorComponent,
      DetalheProfessorComponent,
      MessagesComponent,
      DashboardComponent,
      ProfessorBuscaComponent// Adição automática do componente criado!
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule
    ],
    providers: [ ProfessorService, MessageService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

