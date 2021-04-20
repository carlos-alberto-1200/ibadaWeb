import { Component, OnInit } from '@angular/core';
import { SecuritySignService} from '../../securitySign.service'

@Component({
  selector: 'app-new-sign',
  templateUrl: './new-sign.component.html',
  styleUrls: ['./new-sign.component.scss']
})
export class NewSignComponent implements OnInit {

  constructor(public securitySignService: SecuritySignService) { }

  ngOnInit() {
    console.log("DIEZ");
    this.securitySignService.add("dos");
  }

}
