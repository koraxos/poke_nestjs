import {Entity, Column , PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";


@Entity('article')
export class ArticleEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	resume:string;

}
