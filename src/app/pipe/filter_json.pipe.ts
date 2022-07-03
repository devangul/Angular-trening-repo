import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter_json'
})

export class FilterJson implements PipeTransform{
    transform(Mass: any, value: any) {
        return Mass.filter((mas: any)=> (mas.completed.toString() != false).toString().includes(value))
    }
}