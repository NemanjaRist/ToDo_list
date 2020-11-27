import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListaServisService } from '../lista-servis.service';
import { Lista } from '../models/lista.model';
import { Stavka } from '../models/stavka.model';

@Component({
  selector: 'app-stavke-ulisti',
  templateUrl: './stavke-ulisti.component.html',
  styleUrls: ['./stavke-ulisti.component.css']
})
export class StavkeUListiComponent implements OnInit {
  private routeSub: Subscription;
  public ulaznaVrednost: string;
  public stavke: Stavka[];
  public lista: Lista;
  private listaId;
  public filteredStavkee: Stavka[]=[];

  constructor(
              private route:ActivatedRoute,
              private lServis: ListaServisService
              ) { }

  ngOnInit(): void {
      this.routeSub = this.route.params.subscribe(params => {
        console.log(params) //log the entire params object
        console.log(params['listaId']) //log the value of id

        this.listaId = params['listaId'];
        this.stavke = this.lServis.getStavka(this.listaId);
        this.lista = this.lServis.getSpecificList(this.listaId);
        this.filteredStavkee = this.lServis.getStavka(this.listaId);

      });

  }

  public onDodaj(ime: string){
    this.lServis.upisStavka(ime,this.listaId);
    this.stavke = this.lServis.getStavka(this.listaId);
    console.log(ime);
  }

  public onPromeniStanje(stavkaId){

    this.lServis.getSpecificStavka(this.listaId, stavkaId).stanje = !this.lServis.getSpecificStavka(this.listaId, stavkaId).stanje;

  }

  public minimize(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  public onDelete(id: number){
    const index = this.stavke.findIndex(x => x.stavkaId === id);
    console.log(id);
    this.stavke.splice( index, 1);
    this.lServis.getSpecificList(this.listaId).stavke.splice(index, 1);
  }

}
