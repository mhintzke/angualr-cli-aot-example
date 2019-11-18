import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';

export function myFactory() {
    return {
        myMethod: function {
            return null;
        }
    };
}


@NgModule({
    declarations: [BarComponent],
    imports: [
    ],
    exports: [BarComponent],
    providers: [{
        provide: null,
        useFactory: myFactory
    }]
})
export class BarModule { }
