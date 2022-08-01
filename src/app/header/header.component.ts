import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() wantView = new EventEmitter();
  @Input() viewElem ='';

  ngOnInit(): void {
    this.viewElem = 'Home';
  }

  showView(val:string) {
    this.wantView.emit(val);
    this.viewElem = val;
  }

  getActiveClass(val: string):string {
    let claz = "text-decoration-none text-white p-4 md-4"
    if (val === this.viewElem) {
      return 'bg-success rounded-pill ' + claz;
    }
    return claz;
  }
}
