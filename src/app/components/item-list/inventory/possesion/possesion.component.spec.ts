import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossesionComponent } from './possesion.component';

describe('PossesionComponent', () => {
  let component: PossesionComponent;
  let fixture: ComponentFixture<PossesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
