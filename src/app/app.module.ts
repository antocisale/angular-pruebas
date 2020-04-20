import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULO PARA SERVICIO API
import { HttpClientModule } from '@angular/common/http';

// COMPONENTES
import { AppComponent } from './app.component';
import { FormFirstComponent } from './Components/form-first/form-first.component';
import { Form2Component } from './Components/form2/form2.component';
import { PasswordComponent } from './Components/password/password.component';
import { TodosTableComponent } from './Components/todos-table/todos-table.component';
import { ApiTableComponent } from './Components/api-table/api-table.component';
import { ComunicacionComponent } from './Components/comunicacion/comunicacion.component';
import { SemafotoComponent } from './Components/semafoto/semafoto.component';
import { PeopleListComponent } from './Components/people-list/people-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserCardComponent } from './Components/user-card/user-card.component';
import { CardContainerComponent } from './Components/card-container/card-container.component';
import { ApiTable2Component } from './Components/api-table2/api-table2.component';
import { FormAddComponent } from './Components/form-add/form-add.component';


// SERVICIOS
import { TodosService } from './todos.service';
import { ApiserviceService } from './apiservice.service';

// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

//MODULO DE BROWSER ROUTER
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes =[
  {path: "", component: ApiTableComponent },
  {path: "comunicacion", component: ComunicacionComponent },
  {path: "form1", component: FormFirstComponent },
  {path: "form2", component: Form2Component },
  {path: "password", component: PasswordComponent },
  {path: "people-list", component: PeopleListComponent },
  {path: "semaforo", component: SemafotoComponent },
  {path: "todos", component: TodosTableComponent },
  {path: "user-card", component: CardContainerComponent},
  {path: "tabla2", component:ApiTable2Component}
  
  
] 

// FONT AWESOME
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';

// MANEJAR FORMULARIOS
import { FormsModule } from '@angular/forms';

//PIPES
import {booleanToLetters} from './Pipes/booleanToLetters.pipe';

//DIRECTIVAS
import { CompletedToDo } from './diretives/completedToDo.directive';
import { FormEditComponent } from './Components/form-edit/form-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    FormFirstComponent,
    Form2Component,
    PasswordComponent,
    TodosTableComponent,
    ApiTableComponent,
    ComunicacionComponent,
    SemafotoComponent,
    PeopleListComponent,
    HeaderComponent,
    UserCardComponent,
    CardContainerComponent,
    booleanToLetters,
    CompletedToDo,
    ApiTable2Component,
    FormAddComponent,
    FormEditComponent,

  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [TodosService, ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
