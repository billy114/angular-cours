import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExercicesComponent } from './directives-exercices.component';

describe('DirectivesExercicesComponent', () => {
  let component: DirectivesExercicesComponent;
  let fixture: ComponentFixture<DirectivesExercicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesExercicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesExercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
