import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerJobPostComponent } from './employer-job-post.component';

describe('EmployerJobPostComponent', () => {
  let component: EmployerJobPostComponent;
  let fixture: ComponentFixture<EmployerJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployerJobPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployerJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
