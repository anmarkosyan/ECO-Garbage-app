import "reflect-metadata";
import dotenv from 'dotenv';
import {createConnection} from "typeorm";
import config from "./ormconfig";

dotenv.config();
const port = process.env.PORT || 3000;
import {getApplication} from "./app";

const server = () => {
    createConnection(config)
        .then(() => {
            const application = getApplication();
            application.listen((port) , () => {
                console.log(`Server is running on port : ${port}`);
            })
        }).catch(error => {
            if(error) {
                console.log(`There was an error related with database connection`, error);
                throw error;
            }
    })
};
server();