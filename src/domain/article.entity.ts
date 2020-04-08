import {Entity, Column , PrimaryGeneratedColumn} from "typeorm";


@Entity('article')
export class ArticleEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	resume:string;

}
