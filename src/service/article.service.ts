import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ArticleRepository} from "../repository/article.repository";
import {ArticleEntity} from "../domain/article.entity";

@Injectable()
export class ArticleService {

	constructor(
		@InjectRepository(ArticleRepository)
		private articleRepository: ArticleRepository) {
	}

	async findAll(): Promise<Array<ArticleEntity>> {
		return await this.articleRepository.find();
	}

	async count(): Promise<number> {
		return await this.articleRepository.count();
	}
}
