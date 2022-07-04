import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(Mass:any, value:any) {
 return Mass.filter((mas: any)=>mas.id.toString().includes(value) || mas.completed.toString().includes(value))
}

}
