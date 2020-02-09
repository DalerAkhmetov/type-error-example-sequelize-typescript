import {Sequelize} from 'sequelize-typescript';
import Example from './models/Example';

const sequelize =  new Sequelize({
    url: 'sqlite::memory:',
    modelPaths: [__dirname + '/models/**/*'],


    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        timestamps: true
    }

});


async function run() {
    await sequelize.sync({
        alter: true
    });

    await Example.create({
        id: 123,
        publishedAt: new Date()
    });
    let example = await Example.findOne({
        where: {id: 123}
    });

    if (example) {
        console.log(example.publishedAt instanceof Date);
    } else {
        console.log('no example');
    }

    await sequelize.close();
}

run();