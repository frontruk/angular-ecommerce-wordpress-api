import {
    ChangeDetectionStrategy,
    Component,
    HostBinding, Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    // tslint:disable-next-line:component-selector
    selector: 'sections[ux-sections]',
    styleUrls: ['./sections.component.scss'],
    templateUrl: 'sections.component.html'
})

export class SectionsComponent implements OnInit {
    @Input() sections;
    image;
    /**
     * Css base class.
     */
    @HostBinding('class.sections')
    private addBaseCssClass = true;
    constructor() {}
    ngOnInit() {

        if(this.sections.section_image){
            console.log('TESTING IMG')
            console.log('img', this.sections.section_image.sizes)
            this.image = this.sections.section_image.sizes.large
        }

    }

}
