import { Component, OnInit } from '@angular/core';
import { SecuritySignService} from '../../securitySign.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-sign',
  templateUrl: './new-sign.component.html',
  styleUrls: ['./new-sign.component.scss']
})
export class NewSignComponent implements OnInit {
  usuario:{user:string};

  constructor(public securitySignService: SecuritySignService, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.usuario = {user: this.rutaActiva.snapshot.params.user}
    console.log("usuario: ", this.usuario);
    this.securitySignService.add(this.usuario.user);
  }
}
