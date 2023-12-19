import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogProdutosComponent } from './log-produtos.component';

describe('LogProdutosComponent', () => {
  let component: LogProdutosComponent;
  let fixture: ComponentFixture<LogProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogProdutosComponent]
    });
    fixture = TestBed.createComponent(LogProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
