import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelComponent } from './level.component';
import { AulasModule } from '../aulas.module';

describe('LevelComponent', () => {
  let component: LevelComponent;
  let fixture: ComponentFixture<LevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelComponent, AulasModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
