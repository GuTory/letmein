import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[formFeedback]'
})
export class FormFeedbackDirective implements AfterViewInit {

    constructor(private elementRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.classList.add(
            'text-light-secondary',
            'px-3',
            'text-xs',
            'italic'
        );
    }

}
