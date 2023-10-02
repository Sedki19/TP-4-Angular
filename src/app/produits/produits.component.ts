import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: []
})
export class ProduitsComponent implements OnInit {

  produits: string[];

  constructor() {
    this.produits = ["Pc MSI", "Sourie Razer", "Smartphone Huawei", "Samsung TV"];
  }
  ngOnInit(): void {

  }
}
