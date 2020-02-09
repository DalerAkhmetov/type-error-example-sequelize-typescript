import {Table, Model, Column, DataType, AllowNull, Unique, BelongsTo, ForeignKey} from 'sequelize-typescript';
import Fix from "../Fix";

@Table
@Fix
export default class Example extends Model<Example> {
    @AllowNull(false)
    @Column
    publishedAt!: Date;
}
//video = await Video.findOne({where: {id: 2}});
// video.publishedAt is a string