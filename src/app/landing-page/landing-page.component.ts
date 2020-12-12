import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }
  img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcjL1LDigJ6cPG19uZEuZWkX7QwGT-JzSIA&usqp=CAU";

  img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPSFt60IXzSwT7s7a5L3zIW8Q4nuji6oqzg&usqp=CAU";
  ngOnInit() {
  }

  navpage() {
    this.router.navigateByUrl("place-fitness-trainer-appointment");
  }
  
}
