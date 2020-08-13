import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
