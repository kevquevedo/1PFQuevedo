import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Alumnos } from '../forms-abm-alumnos/forms-abm-alumnos.component';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent implements OnInit {

  @Input() listaActualizada: Alumnos[];

  mostrarLista: string = "";
  color: string = "white";
  flag: boolean= true;
  listaAlumnos: Alumnos[] = new Array;
  listaAux: Alumnos[];
  ngOnInit(): void {}

  public asignarLista(listaActualizada: Alumnos[]){
    if(this.flag){
      this.datosDeAlumnos.data = listaActualizada;
      this.flag=false;
    }
  }

  constructor() { }

  @ViewChild(MatTable) tabla: MatTable<Alumnos>;
  datosDeAlumnos = new MatTableDataSource(this.listaAlumnos);
  titulos: string[] = ['nombreApellido', 'sexo', 'documento'];

  public filtrarLista(caso: string){

    this.datosDeAlumnos.data = this.listaActualizada
    switch (caso) {
      case 'M':

        this.datosDeAlumnos.data = this.datosDeAlumnos.data.filter(function(alumno){
          return alumno.sexo == 'M';
        });
        break;

      case 'F':
        this.datosDeAlumnos.data = this.datosDeAlumnos.data.filter(function(alumno){
          return alumno.sexo == 'F';
        });
        break;
      default:
        return this.datosDeAlumnos.data;
    };
    return this.datosDeAlumnos.data;
  };

}



