//define typescript class
import { Comment } from './comment';
export class Dish {
    //define properties
    id!: string;
    name!: string;
    image!: string;
    category!: string;
    featured!: boolean;
    label!: string;
    price!: string;
    description!:string;
    comments!:Comment[];

}