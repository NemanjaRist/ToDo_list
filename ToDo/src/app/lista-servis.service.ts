import { Stavka } from './models/stavka.model';
import { Lista } from './models/lista.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaServisService {
  public lista: Lista[] = [];
  public filteredStavke: Stavka[] = [];
  public id: number=0;
  public id2: number=0;


  constructor() {

   }

  public setLista(ime: string,stavkaItem: Stavka[]){
    let stavke: Stavka[]=[];
    this.lista.push(new Lista(this.id += 1, ime,stavke));
  }
  public setStavka(listaId: number,stavkaItem: Stavka){
    this.getSpecificList(listaId).stavke.push(stavkaItem);
  }
  public upisStavka(ulaznaVrednost: string,listaId: number){
    let stavkaItem = new Stavka(this.id2 += 1 , ulaznaVrednost,false);
    this.setStavka(listaId , stavkaItem);
  }
  public getLista(): any{
    return this.lista;
  }
  public getStavka(listaId: number){
    this.filteredStavke = [];
    for(let stavkeItem of this.getSpecificList(listaId).stavke){
      this.filteredStavke.push(stavkeItem);
    }
    return this.filteredStavke;
  }


  public getSpecificStavka(idLista: number, idStavka){


    for(let stavkaItem of this.getStavka(idLista))
    {
      if(stavkaItem.stavkaId == idStavka){
        return stavkaItem;
      }
    }
  }

  public getSpecificList(id: number){
    for(let listaItem of this.lista)
    {
      if(listaItem.listaId == id){
        return listaItem;
      }
    }
  }

}
