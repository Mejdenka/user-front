import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-user',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterUserComponent implements OnInit {
  test: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
