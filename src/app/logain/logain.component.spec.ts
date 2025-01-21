import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogainComponent } from './logain.component';

describe('LogainComponent', () => {
  let component: LogainComponent;
  let fixture: ComponentFixture<LogainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
