import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishViewerComponent } from './dish-viewer.component';

describe('DishViewerComponent', () => {
  let component: DishViewerComponent;
  let fixture: ComponentFixture<DishViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
