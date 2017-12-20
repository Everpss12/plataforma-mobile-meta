import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorBuscaComponent } from './professor-busca.component';

describe('ProfessorBuscaComponent', () => {
  let component: ProfessorBuscaComponent;
  let fixture: ComponentFixture<ProfessorBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
