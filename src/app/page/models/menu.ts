export interface MenuCategory{
    ID: number,
    count: number,
    description: string;
    items: Array<any>;
    meta: any;
    name: string;
    slug: string;
}
export interface MenuItem {
    attr: string;
    children: any;
    classes: string;
    description: string;
    id: number;
    object: string;
    object_id: number;
    object_slug: string;
    order: number;
    parent: number;
    target: string;
    title: string;''
    type: string;
    type_label:string;
    url:string;
    xfn: string;
}