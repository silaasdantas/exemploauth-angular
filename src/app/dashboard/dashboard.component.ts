import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.obterUsuarios();
  }

  obterUsuarios() {
    this.dashboardService.obterUsuarios()
      .then((usuarios: Usuario[]) => {
        console.log("usuarios", usuarios)
      });
  }

}
