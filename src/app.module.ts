import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ArticleController} from './controller/article/article.controller';
import {FavorisController} from './controller/favoris/favoris.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";
import {ArticleModule} from "./module/article.module";


@Module({
	imports: [
		TypeOrmModule.forRoot(),
		ArticleModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {

	constructor(connection: Connection) {
	}

}
