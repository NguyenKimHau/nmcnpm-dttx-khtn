//Class

console.clear();

class Parents
{
    constructor(value = 'annonymous')
    {
        this.name = value;
    }

    get Name()
    {
        return this.name;
    }
    set Name(Value)
    {
        this.name = Value;
    }

    toString() { return "String: " + this.name; }

    static getType() { return 'Parents'; }
}

let parent = new Parents();
console.log(Parents.getType(parent));
console.log(parent);

parent = "Peter";
console.log(parent);

class Child extends Parents
{
    constructor(name = 'Annonymous', hight = 0)
    {
        super(name);
        this.hight = hight;
    }

    toString() { return `${this.Name} is tall  ${this.hight}`; }

    static getType() { return 'Child'; }
}

let child = new Child('Marry', 100);
console.log(child);
console.log(child.getType());