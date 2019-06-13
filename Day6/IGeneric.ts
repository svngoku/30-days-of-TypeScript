// interface IKeyValueProcessor
interface IKeyValueProcessor<T,U> {
    process(key: T, value: U): void;
};


// Class Key Value Process implements from IKeyValueProcessor
class kvProcessor<T,U> implements IKeyValueProcessor<T,U> {
    process(key: T, value: U): Object {
        return {
            key: key,
            value: value
        }
    }
}

// exports Inteface with Class

export {
    IKeyValueProcessor,
    kvProcessor
}