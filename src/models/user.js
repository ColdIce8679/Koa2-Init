import mysql from 'mysql2/promise';
import config from '../config/db';
import jwt from 'jsonwebtoken';
import util from 'util';
import moment from 'moment';
import R from 'ramda';

const verify = util.promisify(jwt.verify);
const secret = require('../config/secret.json');

class User {

    async login(ctx) {
        try {
            
            return true;
        } catch (e) {
            return false;
        }

    }

}

export default new User();