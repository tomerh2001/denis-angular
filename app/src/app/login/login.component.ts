import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public onLogin() {
    this.http.post(this.url + `?user=${this.username}&pass=${this.password}`, '')
      .toPromise().then(data => console.log(data));
  }
}
