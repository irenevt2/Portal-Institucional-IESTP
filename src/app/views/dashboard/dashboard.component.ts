import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/modelos/paciente.interface';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }
  pacientes:Paciente[] = [];
  getData(){
    // this.api.listarPacientes({page: 1, dni:"45455454"}).subscribe({
    this.api.Paciente({page: 1}).subscribe({
      next:(result:any)=>{
        console.log(result);
        this.pacientes = result;
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

  editarPaciente(id:string){
    this.api.Paciente({PacienteId:id}).subscribe({
      next: (result:any)=>{
        console.log(result);
        this.pacientes = result;
      },
      error: (error)=>{
        console.log(error);
      }
    })
    // alert(id)
    this.router.navigate(['editar', id])
  }
  nuevoPaciente(){
    this.api.Paciente({})
    this.router.navigate(['nuevo'])
  }

}
