import { Component, OnInit} from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Appointments } from '../appointment.model';
import { ProductserviceService } from './../productservice.service';


export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  appoint : Appointments | any;
  public obj1: any = {};
  fitnessForm: FormGroup | any;
  submitted = false;
  val!: number;
  

  constructor(public appointment: ProductserviceService , private db: FormBuilder) { }
   
  a(){
    this.val=500;
  }
  b(){
    this.val=800;
  }
  c(){
    this.val=1200;
  }




   
  ngOnInit() {
    this.fitnessForm = this.db.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      streetaddress: ['',[Validators.required]],
      state: ['',[Validators.required]],
      pincode: ['',[
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(6),
      Validators.maxLength(6)
      ]],
    city: ['',[Validators.required]],
    trainerpreference: ['',[Validators.required]],
    physiotherapist: ['',[Validators.required]],
    packages: ['',[Validators.required]],
    age : ['',[ Validators.required, Validators.pattern('[0-9]+'), Validators.min(18), Validators.max(60) ]]

    });
   


    
  }
  get f() { return this.fitnessForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.fitnessForm.invalid)
        // stop here if form is invalid
        if (this.fitnessForm.invalid) {
            return;
        }

        // display form values on success
        alert('Appointment Registered Successfully!!');
  
this.appoint=this.fitnessForm.value;
this.appointment.add(this.appoint);
}
    
}
