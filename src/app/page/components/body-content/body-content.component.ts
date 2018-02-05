import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    // tslint:disable-next-line:component-selector
    selector: 'div[ux-bodycontent]',
    styleUrls: ['./body-content.component.scss'],
    templateUrl: 'body-content.component.html'
})

export class BodyContentComponent implements OnInit {

    /**
     * Css base class.
     */
    @HostBinding('class.body-content')
    private addBaseCssClass = true;

    ngOnInit() {}

}
