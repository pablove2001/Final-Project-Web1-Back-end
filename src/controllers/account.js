const modelo = require("../models/account");

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
            console.log("Se creo el usuario correctamente");
            res.send(response);
          })
          .catch((err) => {
            res.status(400).send("No se pudo crear el usuario");
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
        res.send("Se inicio sesion correctamente");
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
  updateAccount: (req, res) => {
    res.send("Desde updateAccount");
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
};

module.exports = AccountController;
