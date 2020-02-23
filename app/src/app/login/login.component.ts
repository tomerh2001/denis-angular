import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  public onLogin() {
    this.http.post(this.url + `?user=${this.username}&pass=${this.password}`, '')
      .toPromise().then(data => {
        console.log(data);
        alert('כבר מעבירים אותך... לא לברוח :)');
        this.router.navigate(['/consents']);
      })
      .catch(data => {
        console.log(data);
        alert('משהו קרה :( בבקשה נסה מחדש');
      });
  }
}
