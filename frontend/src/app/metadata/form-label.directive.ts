import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[formLabel]'
})
export class FormLabelDirective implements AfterViewInit {

    constructor(private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.classList.add(
            'block',
            'uppercase',
            'tracking-wide',
            'text-light-secondary',
            'text-xs',
            'font-bold',
            'mb-2');
    }
}
