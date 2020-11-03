import { Tag } from './tag.interface';

export interface Blog {
    id: number,
    image: string,
    title: string,
    date: Date,
    content: string,
    document: string,
    slug: string,
    tags: Tag[];
}