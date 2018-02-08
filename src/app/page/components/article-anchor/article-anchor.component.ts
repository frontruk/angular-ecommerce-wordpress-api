import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    // tslint:disable-next-line:component-selector
    selector: 'ul[ux-articleanchor]',
    styleUrls: ['./article-anchor.component.scss'],
    templateUrl: 'article-anchor.component.html'
})
export class ArticleAnchorComponent implements OnInit {
    articleList;
    constructor(private route: ActivatedRoute){}

    /**
     * Css base class.
     */
    @HostBinding('class.list')
    private addBaseCssClass = true;

    ngOnInit() {

    }


}
