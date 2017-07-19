import { Component } from '@angular/core'
import { Http, Response} from '@angular/http'
import { ISample } from '../samples/sample'
import { Observable } from 'rxjs/Observable'

@Component({
    moduleId: module.id,
    selector: 'djs-create',
    templateUrl: './createSample.component.html'
})
export class CreateSampleComponent {

    private createSampleUrl:string="http://localhost:5000/api/samples";
    constructor(private _http: Http) { }

    response: string="";

    pageTitle:string="Create a new Sample"
    inputSampleId:string;
    inputBarcode:string;
    inputStatusId:string;
    inputCreatedBy:string;
    inputCreatedAt:string;

    onCreateSuccess(response:Response)
    {
        console.log('Got Successful response');
        this.response = response.statusText;
        console.log(response);
    }

    onCreateError(reason:any)
    {
        this.response = "There was an error in creating the sample. Please check the server."
        console.log("Create Sample Error")
        console.log(reason);
    }

    private _prevPost: Observable<Response>;
    submitSample() {
        console.log('Starting Submission');
        var newSample = {
            "id":this.inputSampleId,
            "barcode":this.inputBarcode,
            "statusId":this.inputStatusId,
            "createdBy":this.inputCreatedBy,
            "createdAt":this.inputCreatedAt,
        };
        console.log('Created Post Body');
        console.log(newSample);
        this._prevPost = this._http.post(this.createSampleUrl,newSample);
        this._prevPost.subscribe(
            data => this.onCreateSuccess(data),
            err => this.onCreateError(err)
        );
        console.log('Subscribed to Observable');
    }

    easySample(){
        console.log('Setting input to easy sample')
        this.inputSampleId="101";
        this.inputBarcode="123456";
        this.inputStatusId="1";
        this.inputCreatedBy="1";
        var now = Date.now();
        this.inputCreatedAt = new Date(now).toISOString();
        console.log("Now: "+this.inputCreatedAt);
    }

}