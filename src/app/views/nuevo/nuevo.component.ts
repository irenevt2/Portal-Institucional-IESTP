import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Paciente } from 'src/app/modelos/paciente.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  constructor(private api:ApiService, private activerouter:ActivatedRoute, private router:Router) { }
  paciente:Paciente = {
    CodigoPostal: "",
    Correo: "",
    Direccion: "",
    DNI: 0,
    FechaNacimiento: "",
    Genero: "",
    Nombre: "",
    PacienteId: "",
    Telefono: ""
  };
  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    dni: new FormControl(''),
    direccion: new FormControl(''),

    correo: new FormControl(''),
    codigoPostal: new FormControl(''),
    genero: new FormControl(''),
    telefono: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    token: new FormControl(''),
    pacienteId: new FormControl('')
});

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.nuevoForm.patchValue({
      'token' : token
    })
  }
  guardar(params:Paciente){
    console.log(params);
    this.api.nuevo(params).subscribe({
      next:(result)=>{
        console.log(result);
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  
  salir(){
    this.router.navigate(['dashboard']);
  }
}
