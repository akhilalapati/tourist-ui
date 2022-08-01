import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tourist} from "../../model/tourist";
import {TouristService} from "../../service/tourist.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() tourist: Tourist;
  @Input() notValid: boolean = true;
  @Input() buttonClick: boolean = true;
  @Output() wantView = new EventEmitter();

  constructor(public touristService: TouristService) {
    this.tourist = <Tourist>{
      firstName: '',
      lastName: '',
      age: NaN,
      fromPlace: '',
      noOfVisitDays: NaN,
      gender: ''
    }
  }

  ngOnInit(): void {
  }

  validateAndPost() {
    if (!this.isValidFields()) {
      this.notValid = false;
      return;
    }
    this.touristService
      .saveTourist(this.tourist)
      .subscribe();

    this.wantView.emit('View All');
  }

  fieldsFilled() {
    return this.tourist.firstName !== ''
      && this.tourist.lastName !== ''
      && this.tourist.age > 0
      && this.tourist.gender != ''
      && this.tourist.fromPlace != ''
      && this.tourist.noOfVisitDays > 0;
  }

  isValidFields() {
    return this.tourist.firstName.length <= 15 &&
      this.tourist.lastName.length <= 12 &&
      this.tourist.age > 0
  }

  clear() {
    this.wantView.emit('Register');
    this.notValid = true;
    this.tourist = <Tourist>{
      firstName: '',
      lastName: '',
      age: NaN,
      fromPlace: '',
      noOfVisitDays: NaN,
      gender: ''
    }
  }

}
