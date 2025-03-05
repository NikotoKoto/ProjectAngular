import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DymaComponent } from './dyma.component';

describe('DymaComponent', () => {
  let component: DymaComponent;
  let fixture: ComponentFixture<DymaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DymaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DymaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
