import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }

})
export class SafeLinkDirective{
    queryParam = input('my-app', {alias: 'appSafeLink'})
    constructor(){
        console.log("SafeLink directive is active");
    }

    onConfirmLeavePage(event: MouseEvent){
        const wantsToLeave = window.confirm("Do you want to leave the app?");
        if(wantsToLeave){
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + this.queryParam();
            return;
        }
        event.preventDefault();
    }
}