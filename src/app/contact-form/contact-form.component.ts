import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethod = [
    {id:1, name:'Email'},
    {id:2, name:'Phone'}
  ];
log(x):any{
  console.log(x)
}
submit(f):void{
  console.log(f.value)
}
  constructor() { }

  ngOnInit(): void {
  }

}
