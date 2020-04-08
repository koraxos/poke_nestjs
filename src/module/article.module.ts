import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticleController} from "../controller/article/article.controller";
import {ArticleService} from "../service/article.service";
import {ArticleRepository} from "../repository/article.repository";

@Module({
	imports : [TypeOrmModule.forFeature([ArticleRepository])],
	providers: [ArticleService],
	controllers: [ArticleController]
})
export class ArticleModule {}
