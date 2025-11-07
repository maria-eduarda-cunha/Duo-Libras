import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasComponent } from './aulas.component';
import { AulasModule } from '../aulas.module';

describe('AulasComponent', () => {
  let component: AulasComponent;
  let fixture: ComponentFixture<AulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AulasComponent, AulasModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
