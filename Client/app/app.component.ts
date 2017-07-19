import { Component } from '@angular/core';

@Component({
    selector: 'djs-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <djs-samples>Loading Sample Data...</djs-samples>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = `DJS Sample Management`;
}
//<djs-samples></djs-samples>
