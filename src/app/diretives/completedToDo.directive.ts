import {Directive, ElementRef, Input} from '@angular/core';


@Directive({
    selector: '[completedToDo]',
})

export class CompletedToDo{
    public state;

    @Input() completedToDo;
    constructor(private el : ElementRef){
    }

    ngOnInit(){
        this.completedToDo ? this.el.nativeElement.classList.add("done") : this.el.nativeElement.classList.add("undone")  
    }

}