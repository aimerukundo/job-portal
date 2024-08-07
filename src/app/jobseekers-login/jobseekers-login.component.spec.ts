import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekersLoginComponent } from './jobseekers-login.component';

describe('JobseekersLoginComponent', () => {
  let component: JobseekersLoginComponent;
  let fixture: ComponentFixture<JobseekersLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobseekersLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobseekersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
