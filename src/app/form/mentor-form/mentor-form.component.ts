import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.scss']
})
export class MentorFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let secondaryForm = document.getElementById('mentorFormSecondary')
    secondaryForm.hidden = true;
  }

  nextForm(){
    let form = document.getElementById('mentorForm')
    let secondaryForm = document.getElementById('mentorFormSecondary')
    form.hidden = true;
    
    secondaryForm.hidden = false;
    secondaryForm.classList.add('fade-in')
  }
}
