interface IKeyValueProcessor<T,U> {
    process(key: T, value: U): void;
};



class kvProcessor<T,U> implements IKeyValueProcessor<T,U> {
    process(key: T, value: U): Object {
        return {
            key: key,
            value: value
        }
    }
}


export {
    IKeyValueProcessor,
    kvProcessor
}