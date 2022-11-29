const modelo = require("../models/account");
const { generateAccessToken } = require("../auth/jwt");

const AccountController = {
  list: (req, res) => {
    modelo
      .find({ status: 1 })
      .then((response) => {
        res.send(response);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        res.status(400).send();
      });
  },
  signin: async (req, res) => {
    const email = req.body.email;
    try {
      const user = await modelo.findOne({ email: email, status: 1 });
      if (user) {
        res.status(404).send("ya hay una cuenta con ese correo");
      } else {
        const datos = req.body;
        modelo
          .create(datos)
          .then((response) => {
            const token = generateAccessToken({ _id: response._id });
            res.send(token);
          })
          .catch((err) => {
            res.status(404).send("No se pudo crear el usuario");
          });
      }
    } catch (err) {
      res.status(400).send("Los datos no son validos");
    }
  },
  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await modelo.findOne({
        email: email,
        password: password,
        status: 1,
      });
      if (user) {
        const token = generateAccessToken({ _id: user._id.toString() });
        res.send(token);
      } else {
        res.status(404).send("Error iniciando sesion");
      }
    } catch (err) {
      res.status(400).send("Los datos no son validos");
    }
  },
  getAccount: async (req, res) => {
    try {
      const email = req.body.email;
      const user = await modelo.findOne({
        email: email,
        status: 1,
      });
      if (user) {
        res.send(user);
      } else {
        res.status(404).send("Error buscando usuario");
      }
    } catch (err) {
      res.status(400).send("Los datos no son validos");
    }
  },
  deleteOneAccount: (req, res) => {
    const email = req.body.email;
    modelo
      .findOne({ email: email })
      .then((response) => {
        response.status = 0;
        response.save();
        res.send(response);
      })
      .catch((err) => {
        res.status(400).send("no se pudo eliminar");
      });
  },
  updatePassword: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const newPassword = req.body.newPassword;
      const user = await modelo.findOne({
        email: email,
        password: password,
        status: 1,
      });
      if (user) {
        user.password = newPassword;
        user.save();
        res.send(user);
      } else {
        res.status(404).send("Error actualizando contraseña");
      }
    } catch (err) {
      res.status(400).send("Los datos no son validos");
    }
  },
  getDireccion: async (req, res) => {
    try {
      const email = req.body.email;
      const user = await modelo.findOne({
        email: email,
        status: 1,
      });
      if (user) {
        res.send(user.direccion);
      } else {
        res.status(404).send("Error buscando direccion del usuario");
      }
    } catch (err) {
      res.status(400).send("Los datos no son validos");
    }
  },
  updateDireccion: async (req, res) => {
    try {
      const email = req.body.email;
      const direccion = req.body.direccion;
      const user = await modelo.findOne({
        email: email,
        status: 1,
      });
      if (user) {
        user.direccion = direccion;
        user.save();
        res.send(user);
      } else {
        res.status(404).send("Error cambiando direccion");
      }
    } catch (err) {
      res.status(400).send("Los datos no son validos");
    }
  },
};

module.exports = AccountController;
