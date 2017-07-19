import {Pipe, PipeTransform } from '@angular/core'
import { ISample } from './sample'

@Pipe({
    name:'sampleUserFilter'
})
export class SampleUserFilterPipe implements PipeTransform {
    transform(value: ISample[], filterBy:string): ISample[] {
        if (!filterBy)
            return value;

        filterBy = filterBy.toLocaleLowerCase();

        return value.filter((sample)=>{
            return sample.firstName.toLocaleLowerCase().includes(filterBy) 
                    || sample.lastName.toLocaleLowerCase().includes(filterBy);
        });

    }
}

@Pipe({
    name:'sampleStatusFilter'
})
export class SampleStatusFilterPipe implements PipeTransform {
    transform(value: ISample[], filterBy:string): ISample[] {
        if (!filterBy)
            return value;

        filterBy = filterBy.toLocaleLowerCase();

        return value.filter((sample)=>{
            return sample.status.toLocaleLowerCase().includes(filterBy);
        });

    }
}