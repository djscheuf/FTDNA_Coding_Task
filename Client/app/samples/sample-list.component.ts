import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ISample } from './sample';

@Component({
    selector: 'djs-samples',
    templateUrl: 'app/samples/sample-list.component'
})
export class SampleListComponent {    
    
    constructor(public http:Http) {}
    
    statusFilter: string;
    userFilter:string;
    warning:string;

    samples: ISample[]=[];

    load(): void {
        this.http.get('localhost:5000/api/samples')
            .subscribe(
                data => {let result = JSON.parse(data.toString()); this.samples.concat(result)},
                err => console.log(err),
                () => {}
            );
    }
}
