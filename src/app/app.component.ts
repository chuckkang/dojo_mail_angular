import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
title = 'Dojo Mail';
emaildata = [
	new DojoMail ("bill@gates.com", false, "New Windows", "X1 will launch"), 
	new DojoMail("ada@lovelace.com", true, "Programming", "Enchantress	"), 
	new DojoMail("john@carmac.com", false, "Updated Algo", "New Algo"), 
	new DojoMail("gabe@newel.com", true, "HL3", "Angular assignment"), 
	new DojoMail("chuck@asdf.com", false, "Start on Angular", "Angular"), 
];

}
class DojoMail {
	email: string;
	importance: boolean;
	subject: string;
	content: string;
	constructor(email: string, importance: boolean, subject: string, content: string) {
		this.email = email;
		this.importance = importance;
		this.subject = subject;
		this.content = content;
	}
}