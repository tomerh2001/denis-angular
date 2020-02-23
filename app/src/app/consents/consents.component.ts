import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url + '/consents')
    .toPromise().then(data => {
      console.log(data);
    })
    .catch(data => {
      console.log(data);
    });
  }

}
