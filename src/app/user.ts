export class User {
    name: string;
    giftTo?: string;
    excludeUsers: string[];

    constructor(name: string)
    {
        this.name = name;
        this.excludeUsers = [];
    }

    
}