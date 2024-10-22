import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,

})
export class SafeLinkDirective{
    constructor(){
        console.log("SafeLink directive is active");
    }
}