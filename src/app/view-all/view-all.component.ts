import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Tourist} from "../model/tourist";
import {TouristService} from "../service/tourist.service";

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(public touristService: TouristService) {
  }

  tourists: Tourist[] = [];

  @Input() filterNames = '';
  @Input() dataStatus = 'Loading!!!!....';
  deleteStatus: Boolean = false;

  ngOnInit(): void {
    this.getTourists();
  }

  deleteTourist(val: number) {
    this.touristService.deleteTourist(val).subscribe(response => {
      this.getTourists();
    })

  }

  filterTourists(val: string) {
    if (this.filterNames.length === 0) {
      this.getTourists();
    }
    this.tourists = this.tourists.filter(t => {
      return t.firstName.includes(val)
        || t.lastName.includes(val)
        || (t.firstName + " " + t.lastName).includes(val);
    })
  }

  getTourists() {
    this.touristService
      .getAllTourists()
      .subscribe(response => {
        this.dataStatus = 'No Data Found';
        this.tourists = response
      });
  }

  clearSearch() {
    this.filterNames = '';
    this.getTourists();
  }

}
