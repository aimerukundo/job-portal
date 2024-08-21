import { Component } from '@angular/core';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrl: './employer-dashboard.component.scss'
})
export class EmployerDashboardComponent {
  public contact = '';
  public company = '';
  constructor() {}
}
