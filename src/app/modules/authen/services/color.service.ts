import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  //variabile evento, cosa fa questo evento?

  public $changedColorEvent: EventEmitter<string>;

  constructor() {

    //istanziato

    this.$changedColorEvent = new EventEmitter();
  }

  //funzione che scatena l'evento
  changeMenuColor(color: string) {
    this.$changedColorEvent.emit(color);
  }

}
