import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/modelos/paciente.interface';
// import { ResponseI } from 'src/app/modelos/response.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  
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
  editarForm = new FormGroup({
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
    let pacienteid = this.activerouter.snapshot.paramMap.get('id');
    //alert(pacienteid);
    // AQUI LO QUE TEMOS QUE HACER ES RECUPERAR LOS DATOS DEL PACIENTE 
    let token = this.getToken();
    console.log(token);
    this.api.Paciente({id: pacienteid})
    .subscribe({
      next: (result:any)=>{
        console.log("pacientes con id")
        console.log(result);
        // TE DISTE CUENTA CUANDO NO ENCUENTRA NINGUN PACIENTE CON EL ID REFRESA NULL
        // AHORA REGRESA UN ARRAY
        if(result != null){
          this.paciente = result[0]
          this.editarForm.setValue({
            'nombre': this.paciente.Nombre,
            'dni': this.paciente.DNI,
            'direccion': this.paciente.Direccion,
            'correo':this.paciente.Correo,
            'codigoPostal' :this.paciente.CodigoPostal,
            'genero' : this.paciente.Genero,
            'telefono' : this.paciente.Telefono,
            'fechaNacimiento' : this.paciente.FechaNacimiento,
            // ESOS CAMPOS SON OBLIGATORIS
            'token' : this.getToken() , 
            'pacienteId' : this.paciente.PacienteId
          })
          console.log(this.editarForm.value)
        }
        // this.pacientes = result;
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }
  // MUESTRA LA DOCUMNTACION ok
  getToken(){
    return localStorage.getItem('token');
  }

  guardar(params:Paciente){
    // VALIDAS DATOS, VERIFICAS QUE EL FORMULARIO ESTE BIEN
    // ASUMAMOS QUE ESTA BIEN
    let pac = this.editarForm.value;
    console.log("pac");
    console.log(pac);
    if(true){
      let params = {
        nombre : pac.nombre,
        dni : pac.dni,
        correo:pac.correo,
        codigoPostal :pac.codigoPostal,
        genero : pac.Genero,
        direccion : pac.direccion,
        telefono : pac.telefono,
        fechaNacimiento : pac.fechaNacimiento,
        // ESOS CAMPOS SON OBLIGATORIS
        token : pac.token, 
        pacienteId : pac.pacienteId
      }
      // console.log("Datos a enviar");
      // console.log(params);
      // HACEMOS EL LLAMADO DEL API
      this.api.actualizar(params)
      .subscribe({
        next: (result)=>{
          console.log(result)
        },
        error:(error)=>{
          console.log(error)
        }
      })
    }
  }
  
  eliminar(){
    let datos:Paciente = this.editarForm.value;
    console.log(datos);
    let params = {
        token : this.getToken(), 
        pacienteId : this.paciente.PacienteId
    }
    this.api.eliminarPaciente(params).subscribe({
      next: (result)=>{
        console.log(result)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  salir(){
    this.router.navigate(['dashboard'])
  }

}
