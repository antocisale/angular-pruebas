import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'booleanToLetters',
})

export class booleanToLetters implements PipeTransform{
    transform(value: boolean){
        let resultado;

        value ? resultado = "yes" : resultado = "no";
        return resultado;
    }
}