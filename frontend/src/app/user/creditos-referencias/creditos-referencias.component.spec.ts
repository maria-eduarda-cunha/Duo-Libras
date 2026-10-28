import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosReferenciasComponent } from './creditos-referencias.component';

describe('CreditosReferenciasComponent', () => {
  let component: CreditosReferenciasComponent;
  let fixture: ComponentFixture<CreditosReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditosReferenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditosReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
