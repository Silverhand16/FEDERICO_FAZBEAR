const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'oracle',
  username: env.DB_USER, // Cambia a DB_USER
  password: env.DB_PASSWORD, // Cambia a DB_PASSWORD
  host: env.DB_HOST, // Cambia a DB_HOST
  port: env.DB_PORT, // Cambia a DB_PORT
  database: env.DB_NAME, // Cambia a DB_NAME
  dialectOptions: {
    // Configuraciones adicionales específicas para Oracle si es necesario
  },
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
  logging: false, // Opcional: desactiva el logging si no lo necesitas
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Empleado = require('../models/empleado.model.js')(sequelize, Sequelize);
db.Reserva = require('../models/reserva.model.js')(sequelize, Sequelize);
db.Cliente = require('../models/cliente.model.js')(sequelize, Sequelize);
db.TipoMenu = require('../models/tipomenu.model.js')(sequelize, Sequelize);
db.MenuGeneral = require('../models/menugeneral.model.js')(sequelize, Sequelize);
db.Sucursal = require('../models/sucursal.model.js')(sequelize, Sequelize);
db.TipoUsuario = require('../models/tipousuario.model.js')(sequelize, Sequelize);
db.Mesa = require('../models/mesa.model.js')(sequelize, Sequelize);
db.DetalleReserva = require('../models/detallereserva.model.js')(sequelize, Sequelize);
db.DetalleFactura = require('../models/detallefactura.model.js')(sequelize, Sequelize);
module.exports = db;
