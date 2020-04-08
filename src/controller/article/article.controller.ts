import {ClassSerializerInterceptor, Controller, Get, Inject, UseInterceptors} from '@nestjs/common';
import {ArticleService} from "../../service/article.service";
import {ArticleDto} from "../../dto/article.dto";
import {plainToClass} from "class-transformer";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {ArticleEntity} from "../../domain/article.entity";

@Controller('/article')
export class ArticleController {

	constructor(@Inject(ArticleService) private articleService: ArticleService) {
	}

	@Get('/all')
	@UseInterceptors(ClassSerializerInterceptor)
	async findAll(): Promise<Array<ArticleEntity>> {
		return await this.articleService.findAll();
	}

	@Get('/count')
	@UseInterceptors(ClassSerializerInterceptor)
	async count(): Promise<number> {
		return await this.articleService.count();
	}
}
