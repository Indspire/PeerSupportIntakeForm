import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mentee-form',
  templateUrl: './mentee-form.component.html',
  styleUrls: ['./mentee-form.component.scss']
})
export class MenteeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let secondaryForm = document.getElementById('menteeFormSecondary')
    secondaryForm.hidden = true;
    let menteeForm = document.getElementById('menteeForm');
    menteeForm.classList.add('fade-show-active')
  }

  nextForm(){
    let form = (document.getElementById('menteeForm') as HTMLFormElement)
    let secondaryForm = document.getElementById('menteeFormSecondary')
    form.hidden = true;
    // let name = (document.getElementById('name') as HTMLInputElement).value ;
    let address = (document.getElementById('address') as HTMLInputElement).value;
    let gender = form.elements["gender"].value;
    let name = form.elements["name"].value;

    console.log(name);
    console.log(gender);
    console.log(address);


    secondaryForm.hidden = false;
    secondaryForm.classList.add('fade-in');
  }
}
