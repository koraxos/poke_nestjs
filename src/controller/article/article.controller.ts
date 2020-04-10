import {
	ClassSerializerInterceptor,
	Controller,
	Get,
	HttpStatus,
	Inject,
	Response,
	UseInterceptors
} from '@nestjs/common';
import {ArticleService} from "../../service/article.service";

@Controller('/article')
export class ArticleController {

	constructor(@Inject(ArticleService) private articleService: ArticleService) {
	}

	@Get('/all')
	async findAll(@Response() response) {
		const articles = await this.articleService.findAll();
		console.log(articles);
		if (!!articles) {
			response.status(HttpStatus.OK).json(articles);
		} else {
			response.status(HttpStatus.INTERNAL_SERVER_ERROR)
		}
		return response;
	}

	@Get('/count')
	@UseInterceptors(ClassSerializerInterceptor)
	async count(): Promise<number> {
		return await this.articleService.count();
	}
}
