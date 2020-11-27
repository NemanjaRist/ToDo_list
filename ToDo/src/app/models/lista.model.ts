import { Stavka } from './stavka.model';
export class Lista {
    constructor(
      public listaId: number,
      public listaIme: string,
      public stavke: Stavka[]
                ){
    }

}
