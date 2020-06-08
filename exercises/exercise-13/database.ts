export class Database<T> {
    protected filename: string;
    protected fullTextSearchFieldNames: string[];

    constructor(filename: string, fullTextSearchFieldNames: string[]) {
        this.filename = filename;
        this.fullTextSearchFieldNames = fullTextSearchFieldNames;
    }

    async find(query): Promise<T[]> {
        return [];
    }
}
