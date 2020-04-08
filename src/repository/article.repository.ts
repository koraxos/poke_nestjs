import {EntityRepository, MongoRepository} from "typeorm";
import {ArticleEntity} from "../domain/article.entity";
import {Injectable} from "@nestjs/common";

@Injectable()
@EntityRepository(ArticleEntity)
export class ArticleRepository extends MongoRepository<ArticleEntity>{

}
