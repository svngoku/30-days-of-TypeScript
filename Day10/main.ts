// @ts-check
import { IUser} from './interfaces/IUser';
// let's define users

const User1: IUser =  {
    id: 1,
    firstName: 'Manue',
    lastName: 'Henrie',
    proUser: true,
    email: 'manue.henrie@gmail.com'
}

const User2: IUser = {
    id: 2,
    firstName: 'CHOW',
    lastName: 'Patrick',
    proUser: false,
    email: 'manue.henrie@gmail.com',
    avatar: 'https://something/my-face.jpg'
}

console.log({ 
    User1,
    User2
});