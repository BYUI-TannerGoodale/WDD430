import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSecret(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1)
  }
}
