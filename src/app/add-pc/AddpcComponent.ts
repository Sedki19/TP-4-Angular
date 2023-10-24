import { Component, OnInit } from '@angular/core';
import { pc } from '../model/pc.model';
import { pcService } from '../services/pc.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-add-pc',
    templateUrl: './add-pc.component.html'
})
export class AddpcComponent implements OnInit {

    newpc = new pc();

    message!: string;

    constructor(private pcService: pcService, private router: Router,) {

    }

    ngOnInit(): void {
    }

    addpc() {
        this.pcService.ajouterpc(this.newpc);
        this.message = "pc " + this.newpc.nompc + " ajouté avec succes";
        this.router.navigate(['pcs']);
    }

}
