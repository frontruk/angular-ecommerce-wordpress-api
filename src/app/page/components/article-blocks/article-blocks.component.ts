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
    selector: 'div[ux-articleblocks]',
    styleUrls: ['./article-blocks.component.scss'],
    templateUrl: 'article-blocks.component.html'
})
export class ArticleBlocksComponent implements OnInit {
    /**
     * Css base class.
     */
    @HostBinding('class.article-block')
    private addBaseCssClass = true;

    ngOnInit() {
    }

}
