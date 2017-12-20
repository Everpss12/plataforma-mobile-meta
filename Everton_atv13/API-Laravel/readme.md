## Como Execultar a API

#### 1º
Depois de clonar o repositório crie uma cópia do arquivo `.env.example`, com o nome `.env`

```sh
cp .env.example .env
```
#### 2º
Crie e um banco de dados e faça as configurações do `.env` apontar para ele;

#### 3º
Instale as dependências do projeto rodando:

```sh
composer install
```
#### 4º
Gere a chave da aplicação
```sh
php artisan key:generate
```
#### 5º
Rode as migrações do sistema e seus `seeders`

```sh
php artisan migrate --seed
```
#### 6º
Rode o servidor da na sua aplicação
```sh
php artisan serve
```
Por padrão será aberto o servidor da sua aplicação em: `http://127.0.0.1:8000/`

## Lista de Rotas da API
No arquivo `routes/api.php`, estão disponives as seguintes rotas:

```php
/******************* 
*  Rotas de aluno  *
********************/
/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno
* Método: GET
* Descrição: Lista todos os alunos do banco
*/
Route::get('aluno','AlunoController@index');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno/1/edit
* Método: GET
* Descrição: Lista um aluno encontrado pelo seu id
*/
Route::get('aluno/{id}/edit','AlunoController@edit');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno
* Método: POST
* Descrição: Recebe dados de um aluno para salvar no banco
*/
Route::post('aluno','AlunoController@store');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno/1
* Método: PUT
* Descrição: Atualiza o dado de um aluno cujo id for passado
*/
Route::put('aluno/{id}','AlunoController@update');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/aluno/1
* Método: DELETE
* Descrição: Exclui um aluno do bando cujo o id for passado
*/
Route::delete('aluno/{id}','AlunoController@destroy');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/buscar_aluno?busca=maria
* Método: GET
* Descrição: Busca alunos no banco com nome similar ao valor do parâmetro busca
*/
Route::get('buscar_aluno', 'AlunoController@buscar');


/***********************
*  Rotas de professor  *
************************/
/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor
* Método: GET
* Descrição: Lista todos os professores do banco
*/
Route::get('professor','ProfessorController@index');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor/1/edit
* Método: GET
* Descrição: Lista um professor encontrado pelo seu id
*/
Route::get('professor/{id}/edit','ProfessorController@edit');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor
* Método: POST
* Descrição: Recebe dados de um professor para salvar no banco
*/
Route::post('professor','ProfessorController@store');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor/1
* Método: PUT
* Descrição: Atualiza o dado de um professor cujo id for passado
*/
Route::put('professor/{id}','ProfessorController@update');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/professor/1
* Método: DELETE
* Descrição: Exclui um professor do bando cujo o id for passado
*/
Route::delete('professor/{id}','ProfessorController@destroy');

/**
* Rota disponivel em: exemplo em: http://127.0.0.1:8000/api/buscar_professor?busca=paulo
* Método: GET
* Descrição: Busca professor no banco com nome similar ao valor do parâmetro busca
*/
Route::get('buscar_professor', 'ProfessorController@buscar');
```