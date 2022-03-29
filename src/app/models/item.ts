export class Item {
    id: number;
    name: string;
    description: string;
    price: number;

    constructor(id: number, name = '', description = '', price = 0) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
