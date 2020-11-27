import { ListaServisService } from './../lista-servis.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Lista } from '../models/lista.model';
import { Subscription } from 'rxjs';
import { Stavka } from '../models/stavka.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public inputValue: string;
  public liste: Lista[]=[];
  public lista: Lista;
  public stavke: Stavka[] = [];

  constructor(
              private lServis: ListaServisService
              ) { }

  ngOnInit(): void {
    this.liste = this.lServis.getLista();
  }

  public onDodavanje(ime: string){
    console.log(ime);
    this.lServis.setLista(ime,this.stavke);
  }

  public onObrisi(id: number){
  const index = this.liste.findIndex(x => x.listaId === id);
    this.liste.splice( index, 1);
  }
}
