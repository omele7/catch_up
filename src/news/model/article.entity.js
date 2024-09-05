import {Source} from "./source.entity.js";

export class Article {
    constructor({
                    title = '',
                    description = '',
                    author = '',
                    urlToImage = '',
                    source = null,
                    publishedAt = ''
                }) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.urlToImage = urlToImage;
        this.source = source ? new Source(source) : null;
        this.publishedAt = new Date(publishedAt);
    }
}