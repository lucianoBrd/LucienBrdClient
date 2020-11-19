import { User } from './user.interface';

export interface Comment {
    id: number,
    message: string,
    date: string,
    image: string,
    post: string,
    user: User,
}