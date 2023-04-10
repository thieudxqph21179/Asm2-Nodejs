import instance from './instance';
import { IUser } from '../types/user';

const register = (user: IUser) => {
    return instance.post('/signup', user);
};

export { register };
