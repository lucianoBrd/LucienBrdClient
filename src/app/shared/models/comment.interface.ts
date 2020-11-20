import { User } from './user.interface';

export interface Comment {
    id: number,
    message: string,
    date: Date,
    post: string,
    user: User,
}