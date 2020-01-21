/**
 * @param target 
 */
const LogClassName : ClassDecorator = target => {
    console.log(target.name);
}

@LogClassName
class Person {
    constructor(
        public readonly firstname : String, 
        public readonly lastname: String
    ){}
}