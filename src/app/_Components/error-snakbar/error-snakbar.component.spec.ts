import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSnakbarComponent } from './error-snakbar.component';

describe('ErrorSnakbarComponent', () => {
  let component: ErrorSnakbarComponent;
  let fixture: ComponentFixture<ErrorSnakbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorSnakbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorSnakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
