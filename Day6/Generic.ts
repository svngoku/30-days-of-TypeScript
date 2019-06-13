// @ts-check

// KeyVlaue Pair class
class KeyValuePair<T,U>
{
    // properties
    private key: T;
    private value: U;

    // constructor of class
    constructor(key: T, value: U) {
        this.key = key;
        this.value = value;
    }

    // display method : log the key and the value instanciate
    display(): void {
        console.log(`Key: ${this.key}, value: ${this.value}`);
    }
}

export default KeyValuePair;