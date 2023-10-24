import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pcService } from '../services/pc.service';
import { pc } from '../model/pc.model';


@Component({
  selector: 'app-update-pc',
  templateUrl: './update-pc.component.html',

})
export class UpdatepcComponent {
  currentpc = new pc();
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private pcService: pcService,
  ) { }
  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.currentpc = this.pcService.consulterpc(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentpc);
  }


  updatepc() {
    //console.log(this.currentpc);
    this.pcService.updatepc(this.currentpc);
    this.router.navigate(['pcs']);
  }




}
