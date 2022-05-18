import Sequelize from 'sequelize';

const sequelize = new Sequelize("d5eakqq43t4qdm", "grccbgacjwdlxb","f856459c5772df5953cf6baf5c2f62f122b494707010a3d271168c85f64d2ca3", {
    connection: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
},
);

export default sequelize;
