import { Injectable } from '@angular/core';
import { pc } from '../model/pc.model';


@Injectable({
  providedIn: 'root'
})
export class pcService {

  pcs: pc[]; //un tableau de pcs
  pc!: pc;

  constructor() {
    this.pcs = [{ idpc: 1, nompc: "MSI GF 63", prixpc: 2000, Specs: "CPU : I5 11eme gen / GPU : GEOFORCE GT710 / 8GB RAM " },
    { idpc: 2, nompc: "HP ProBook G9", prixpc: 1400, Specs: "CPU : Rayzen 5 / GPU : GEOFORCE GTx1650 / 16GB RAM" },
    { idpc: 3, nompc: "MSI Katana", prixpc: 3200, Specs: "CPU : I7 11eme / GPU : GEOFORCE RTX3060 / 32GB RAM" }
    ];


  }

  consulterpc(id: number): pc {
    this.pc = this.pcs.find(p => p.idpc == id)!;
    return this.pc;
  }


  listepcs(): pc[] {
    return this.pcs;
  }

  ajouterpc(prod: pc) {
    this.pcs.push(prod);
  }
  supprimerpc(prod: pc) {
    const index = this.pcs.indexOf(prod, 0);
    if (index > -1) {
      this.pcs.splice(index, 1);
    }
  }
  updatepc(p: pc) {

    this.supprimerpc(p);
    this.ajouterpc(p);
    this.trierpcs();


  }
  trierpcs() {
    this.pcs = this.pcs.sort((n1, n2) => {
      if (n1.idpc! > n2.idpc!) {
        return 1;
      }
      if (n1.idpc! < n2.idpc!) {
        return -1;
      }
      return 0;
    });
  }


}



