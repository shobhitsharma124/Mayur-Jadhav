import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Appointments } from '../appointment.model';
import { ProductserviceService } from '../productservice.service';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  constructor(public appoint:ProductserviceService,private fb:FormBuilder) { }

  app : Appointments[]=[];  

  filterapp : Appointments[]=[];
  search = this.fb.group({
 value : [""]
  });

  onSearch(){
     if(this.search.value.value=="A"){
      this.filterapp=this.app
    }
    else if(this.search.value.value=="M"){
      this.filterapp=this.app.filter(c=>c.trainerpreference=="Male")
    }
    else if(this.search.value.value=="F"){
      this.filterapp=this.app.filter(c=>c.trainerpreference=="Female")
    }
    else if(this.search.value.value=="N"){
      this.filterapp=this.app.filter(c=>c.trainerpreference=="None")
    }
   
  }
  ngOnInit() {
    this.app=this.appoint.fetch()
    console.log(this.app)
  }
  
  getfitness() {
    
  }
}
