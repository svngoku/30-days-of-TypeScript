// @ts-check

class KeyValuePair<T,U>
{
    private key: T;
    private value: U;

    constructor(key: T, value: U) {
        this.key = key;
        this.value = value;
    }

    display(): void {
        console.log(`Key: ${this.key}, value: ${this.value}`);
    }
}

export default KeyValuePair;