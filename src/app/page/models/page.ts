export interface PageApiResponse {
    id: number;
    date: number;
    date_gmt: number;
    guid: any;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: any;
    excerpt: any;
    author: number;
    featured_media: number;
    parent: number;
    menu_order: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: any;
    acf: any;
    _links: any;
}
