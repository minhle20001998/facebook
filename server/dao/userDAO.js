const { User } = require('../models/');
const bcrypt = require('bcrypt');
class UserDAO {
    constructor() {
        this.saltRounds = 10;
    }

    async findAll() {
        try {
            const users = await User.findAll();
            return users
        } catch (error) {
            return { errors: "error" }
        }
    }

    async insert(data) {
        data.password = this.hashPassword(data.password);;
        try {
            const result = await User.create(data);
            return { status: "OK" };
        }
        catch (error) {
            return { errors: "error" };
        }
    }

    async checkLogin(data) {
        if (data.phoneNumber) {
            const user = await User.findOne({ where: { phoneNumber: data.phoneNumber } });
            if (user == null) {
                return { errors: "error" }
            }
            return this.checkPassword(data.password, user.password) ? ({ username: user.firstName, uid: user.uid }) : false;
        } else if (data.email) {
            const user = await User.findOne({ where: { email: data.email } });
            if (user == null) {
                return { errors: "error" }
            }
            return this.checkPassword(data.password, user.password) ? ({ username: user.firstName, uid: user.uid }) : false;
        }
    }

    hashPassword(password) {
        const hash = bcrypt.hashSync(password, this.saltRounds);
        return hash;
    }

    async checkPassword(pass, dbpass) {
        const match = await bcrypt.compare(pass, dbpass);
        return match;
    }
}


module.exports = new UserDAO();


