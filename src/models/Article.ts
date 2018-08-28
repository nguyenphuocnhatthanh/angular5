export class Article {
    private _title: string;
    private _link: string;
    private _vote: number;

    constructor(d?:any) {
        if (d) {
            this.title = d.title;
            this.link = d.link;
            this.vote = d.vote || 0;
        }
    }

    public set title(v:string) {
        this._title = v;
    }

    public get title(): string {
        return this._title;
    }

    public set link(v : string) {
        this._link = v;
    }
    
    public get link() : string {
        return this._link;
    }
    
    public set vote(v : number) {
        this._vote = v;
    }
    
    public get vote() : number {
        return this._vote || 0;
    }
    
}