import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendasRealizadasComponent } from './vendas-realizadas.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Mock simples do serviço
class MockVendaService {
  getVendas() {
    return [
      {
        produto: 'Mouse',
        preco: 100,
        quantidade: 2,
        subtotal: 200,
        data: '2025-04-15'
      }
    ];
  }
}

describe('VendasRealizadasComponent', () => {
  let component: VendasRealizadasComponent;
  let fixture: ComponentFixture<VendasRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendasRealizadasComponent],
      imports: [CommonModule],
      providers: [
        { provide: 'VendaService', useClass: MockVendaService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(VendasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve calcular o total corretamente', () => {
    expect(component.total).toBe(200);
  });

  it('deve carregar uma venda do serviço', () => {
    expect(component.vendas.length).toBe(1);
    expect(component.vendas[0].produto).toBe('Mouse');
  });
});
