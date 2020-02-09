import {Sequelize} from 'sequelize-typescript';
import {Op} from 'sequelize';
import Example from './models/Example';
import assert from 'assert';

const sequelize =  new Sequelize({
    url: 'mysql://example:123@mysql/example',
    modelPaths: [__dirname + '/models/**/*'],


    timezone: '+03:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        timestamps: true
    }

});


async function run() {
    try {
        await sequelize.sync({
            alter: true
        });

        await Example.destroy({
            where: {id: {[Op.gt]: 0}}
        });
        await Example.create({
            id: 123,
            publishedAt: new Date()
        });
        let example = await Example.findOne({
            where: {id: 123}
        });

        if (example) {
            console.log(example.publishedAt.getTime());
            assert(example.publishedAt instanceof Date);
        } else {
            console.log('no example');
            return;
        }

        console.log('type is correct');

    } catch (e) {
        console.log('error', e);
    } finally {
        await sequelize.close();
    }
}

run();