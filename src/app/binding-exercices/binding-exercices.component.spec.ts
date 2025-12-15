import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExercicesComponent } from './binding-exercices.component';

describe('BindingExercicesComponent', () => {
  let component: BindingExercicesComponent;
  let fixture: ComponentFixture<BindingExercicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingExercicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingExercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
