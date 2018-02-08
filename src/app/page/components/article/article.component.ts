import {
    ChangeDetectionStrategy,
    Component,
    HostBinding, Input,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    // tslint:disable-next-line:component-selector
    selector: 'article[ux-article]',
    styleUrls: ['./article.component.scss'],
    templateUrl: 'article.component.html'
})

export class ArticleComponent implements OnInit {
    @Input() content;
    sectionsList;
    /**
     * Css base class.
     */
    @HostBinding('class.article-page')
    private addBaseCssClass = true;
    constructor(private router: Router) {}
    ngOnInit() {
        if(this.content.acf){
            this.sectionsList = this.content.acf.anchor
        }
    }
    goHome() {
        this.router.navigate(['']);
    }

}
