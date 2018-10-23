"use strict";

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Factor de encriptación de la contraseña
var SALT_WORK_FACTOR = 10;

module.exports = function (mongoose) {
  // Declaramos el esquema (Schema)
  var Schema = mongoose.Schema; // Definimos la estructura general de nuestra tabla de USUARIOS

  var UserSchema = new Schema({
    dni: {
      type: String,
      required: true,
      index: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true
    },
    password: {
      type: String
    },
    name: {
      type: String
    },
    lastName: {
      type: String
    },
    avatar: {
      type: String
    },
    role: {
      type: String,
      enum: ['ADMIN', 'CLIENT'],
      default: 'CLIENT'
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date
    },
    token: {
      type: String
    },
    accountDisabled: {
      type: Boolean,
      default: false
    }
  });
  UserSchema.set('autoIndex', false);
  UserSchema.pre('save', function (next) {
    var user = this;
    user.updatedAt = Date.now();
    if (!user.isModified('password')) return next(); // El generador de SALT recibe 2 parámetros: el factor de encriptación y una función donde
    // tendremos como primer parámetro si se ha producido un error y como segundo tendremos
    // la contraseña cifrada como parámetro de retorno.

    _bcryptjs.default.genSalt(SALT_WORK_FACTOR, function (error, salt) {
      // Si se ha producido un error, nuestra siguiente instrucción será dicho error
      if (error) return next(error); // Si no se ha producido un error, realizaremos la encripcitación de la contraseña
      // El método HASH de bcrypt recibe 3 parámetros: la contraseña a cifrar, el factor de trabajo y
      // una función como tercer parámetro donde tendremos como primer parámetro si se ha producido un
      // error y como segundo tendremos la contraseña cifrada como parámetro de retorno.

      _bcryptjs.default.hash(user.password, salt, function (err, hash) {
        // Si se ha producido un error, nuestra siguiente instrucción será dicho error
        if (err) return next(err); // Si no se ha producido un error, almacenaremos la contraseña encriptada en el
        // campo del usuario

        user.password = hash; // Pasaremos a la siguiente instrucción

        return next();
      });
    });
  }); // # Definición de métodos del esquema
  // Método para la comparación de contraseñas con cifrado
  // Esta función recibe 2 parámetros: la contraseña y el callback (resultados obtenidos en la ejecución)

  UserSchema.methods.comparePassword = function (thePassword) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      // Llamamos al comparador de bcrypt
      // El comparador de bcrypt recibe 3 parámetros: la contraseña introducida por el usuario, la
      // contraseña de el usuario almacenada y una función como tercer parámetro donde el primer
      // parámetro será cualquier error que se nos genere y el segundo parámetro será una bandera
      // booleana que nos informará si ha habido coincidencia.
      return _bcryptjs.default.compare(thePassword, _this.password, function (error, match) {
        // Si se ha producido un error lo devolvemos al Callback (Respuesta)
        if (error) return reject(error); // Si no se ha producido un error, retornamos al Callback sin error y la bandera

        return resolve(match);
      });
    });
  };

  return mongoose.model('user', UserSchema);
};