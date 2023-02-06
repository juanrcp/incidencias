import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFiltradaComponent } from './lista-filtrada.component';

describe('ListaFiltradaComponent', () => {
  let component: ListaFiltradaComponent;
  let fixture: ComponentFixture<ListaFiltradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFiltradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFiltradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
