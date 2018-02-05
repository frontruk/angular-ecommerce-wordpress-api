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
    selector: 'div[ux-sidebar]',
    styleUrls: ['./sidebar.component.scss'],
    templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit {
    BrandLogo = '/assets/ux-e-commerce.png';

    /**
     * Css base class.
     */
    @HostBinding('class.sidebar')
    private addBaseCssClass = true;

    ngOnInit() {}

}
