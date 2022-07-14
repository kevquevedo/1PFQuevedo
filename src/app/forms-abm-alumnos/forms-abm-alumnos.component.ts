import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-abm-alumnos',
  templateUrl: './forms-abm-alumnos.component.html',
  styleUrls: ['./forms-abm-alumnos.component.css']
})
export class FormsAbmAlumnosComponent implements OnInit {


  public listaAlumnos: Alumnos[] = [
    { nombre: "Kevin", apellido: "Quevedo", sexo: "M", documento: 38383838 },
    { nombre: "Graciela", apellido: "Fernandez", sexo: "F", documento: 37373737 },
    { nombre: "Gaston", apellido: "Gutierrez", sexo: "M", documento: 36363636 },
    { nombre: "Agustina", apellido: "Lopez", sexo: "F", documento: 39393939 },
    { nombre: "Leandro", apellido: "Salvatore", sexo: "M", documento: 41414141 } ,
    { nombre: "Daniela", apellido: "Fiorello", sexo: "F", documento: 45454545 },
    { nombre: "Matias", apellido: "Cinzano", sexo: "M", documento: 29292929 }
  ];

  public formulario: FormGroup;
  public formularioBaja: FormGroup;
  public formularioMod: FormGroup;
  public alumnoForm: Alumnos;
  // public alumnoFormE: Alumnos;
  public lista: Alumnos[];
  public respuesta: boolean;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: [, [Validators.required]],
      apellido: [, [Validators.required]],
      sexo: [, [Validators.required]],
      documento: [, [Validators.required]]
    });

    this.formularioBaja = this.fb.group({
      documento: [, [Validators.required]]
    });

    this.formularioMod = this.fb.group({
      documento: [, [Validators.required]],
      nombre: [, [Validators.required]],
      apellido: [, [Validators.required]],
      sexo: [, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe(value =>{
      console.log(value);
    });
  }

  public obtenerLista(info: Alumnos[]){
    this.lista = info;
  }

  crearAlumno(formulario: FormGroup){
    let nombre = formulario.get('nombre')?.value;
    let apellido = formulario.get('apellido')?.value;
    let sexo = formulario.get('sexo')?.value;
    let documento = formulario.get('documento')?.value;
    this.alumnoForm = new Alumnos(nombre, apellido, sexo, documento)

    let existe: boolean = false;
    this.listaAlumnos.forEach(elem => {
     if(elem.documento == this.alumnoForm.documento){
      existe = true;
     }
    });

    if(!existe){
     this.listaAlumnos.push(this.alumnoForm);
    }
  }


  modificarAlumno(formulario: FormGroup){
    let documentoAux = formulario.get('documento')?.value;
    let nombre = formulario.get('nombre')?.value;
    let apellido = formulario.get('apellido')?.value;
    let sexo = formulario.get('sexo')?.value;

    for(let i=0;i<this.listaAlumnos.length-1;i++){
      if(this.listaAlumnos[i].documento == documentoAux ){
        this.listaAlumnos[i].nombre = nombre;
        this.listaAlumnos[i].apellido = apellido;
        this.listaAlumnos[i].sexo = sexo;
      }
    }
  };


  eliminarAlumno(formulario: FormGroup){
    let documentoAux = formulario.get('documento')?.value;
    this.listaAlumnos = this.listaAlumnos.filter((alumno) =>{
      if(alumno.documento == documentoAux){
        this.respuesta = true;
      }
      return alumno.documento != documentoAux;
    });
  };
}

export class Alumnos{

  nombre: string;
  apellido: string;
  sexo: string;
  documento: number;

  constructor(nombre: string, apellido: string, sexo: string, documento: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.documento = documento;
  }

}


