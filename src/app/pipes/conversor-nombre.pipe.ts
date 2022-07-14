import { Pipe, PipeTransform } from '@angular/core';
import { Alumnos } from '../forms-abm-alumnos/forms-abm-alumnos.component';

@Pipe({
  name: 'conversorNombre'
})
export class ConversorNombrePipe implements PipeTransform {

  transform(alumno: Alumnos,): string {
    return `${alumno.apellido}, ${alumno.nombre}`;
  }
}
