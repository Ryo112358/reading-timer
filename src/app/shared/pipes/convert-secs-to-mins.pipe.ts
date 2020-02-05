import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinutes'
})
export class ConvertSecsToMinsPipe implements PipeTransform {

  transform(value: number): String {

    let time: String = this.applyPadding(Math.floor(value/60)) + ":" + this.applyPadding(value % 60);

    return time;
  }

  applyPadding(value: number): any {

    return (value < 10) ? "0" + value : value;
  }

}
