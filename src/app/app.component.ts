import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TouristApp';

  @Input() view: string = "Home";

  showCorrView(val: string) {
    this.view = val;
  }

}
