import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, msg: string}) { }

  ngOnInit(): void {}

}
