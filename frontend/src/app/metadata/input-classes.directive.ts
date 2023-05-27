import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[inputClasses]'
})
export class InputClassesDirective implements AfterViewInit {

    constructor(private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.classList.add(
            'appearance-none',
            'block',
            'w-full',
            'text-light-secondary',
            'border',
            'rounded',
            'py-3',
            'px-4',
            'mb-3',
            'leading-tight',
            'focus:outline-none'
        );
    }

}
