const {createUser, loginUser, validateEmail, updateUser, getUserbyIdAndProductsInCar, getOrdersByUserId} = require("../repositories/users.repository")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserServices {
    static async createNewUser(newUser) {
        try {
            const user = await createUser(newUser);
            return user;
        } catch (e) {
            throw e;
        }
    }

    static async hashed(password) {
        const hashed = await bcrypt.hash(password, 10);
        return hashed;
    }

    static async login(email) {
        try{
            const user = await loginUser(email);
            return user;
        } catch(e) {
            throw e
        }
    }

    static async verifyUser(user) {
        if (!user) {
            return next({
              status: 400,
              name: "Invalid email",
              message: "user not exist",
            });
          }
    }

    static async validPassword(password, user, next) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          return next({
            status: 400,
            name: "Invalid password",
            message: "The password does not match with user email",
          });
        }
    }

    static async token(userData) {
        const token = jwt.sign(userData, process.env.JWT_SECRET_LOGIN, {
            algorithm: "HS512",
            expiresIn: "5h",
          });
          return token
    }

    static async validEmail(decoded) {
        try {
            const user = await validateEmail(decoded);
            return user;
        } catch(e) {
            throw e;
        }
    }

    static async decoded(token, next) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_EMAIL_VALIDATION, {
            algorithms: "HS512",
          });
          if (!decoded) {
            return next({
              status: 400,
              name: "Error de verificación",
              message: "Algo sucedio con la verificació, solicite nuevamente",
            });
          }
          return decoded
    }
    static async updateUserService(filename, username, id) {
      try {
        const user = await updateUser(filename, username, id);
        return user;
      } catch (e) {
         throw e
      }
    }

    static async getProductsInCar(id) {
      try {
        const user = await getUserbyIdAndProductsInCar(id);
        return user;
      } catch (e) {
        throw e
      }
    }

    static async getOrders(id) {
      try {
        return await getOrdersByUserId(id)
      } catch (e) {
        throw e
      }
    }
}

module.exports = UserServices;