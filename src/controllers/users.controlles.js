const UserServices = require("../services/users.services")
require("dotenv").config();
const CarsServices = require("../services/cars.services")

const createUser = async (req, res, next) => {
  try {
    const {username, email, password} = req.body;
    const hash = await UserServices.hashed(password)
    const user = await UserServices.createNewUser({username, email, password:hash});
    res.status(201).send()
    await CarsServices.createNewCar({userId: user.dataValues.id});
  } catch (e) {
    next(e)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.login(email)
    await UserServices.verifyUser(user, next);
    await UserServices.validPassword(password, user, next)
    const { firstname, lastname, id, username, rolId } = user;
    const userData = { firstname, lastname, id, username, email, rolId };
    const token = await UserServices.token(userData)
    userData.token = token;
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const updateUserController = async (req, res, next) =>{
  try {
    const {id} = req.params;
    const {username} = req.body
    const {filename} = req.file
    console.log("entro controlador")
    await UserServices.updateUserService(filename, username, id);
    res.status(201).json({ message: '¡Imagen cargada exitosamente!' });
  } catch (error) {
    next(error)
  }
}

const getUserbyIdController = async (req, res, next) =>{
  try{
    const {id} = req.params;
    const user = await UserServices.getProductsInCar(id);
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

const getOrdersByUserId = async (req, res, next) => {
  try {
    const {id} = req.params;
    const user = await UserServices.getOrders(id)
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createUser,
  login,
  updateUserController,
  getUserbyIdController,
  getOrdersByUserId
};
