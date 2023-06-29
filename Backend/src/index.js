require("dotenv").config();


constmysql=require("mysql2/promise");


const{ DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME} =process.env;


constpool=mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});


pool.getConnection().catch(() =>{
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});


constmodels={};


const UserManager = require("./models/UserManager");
const PriceController = require("./models/PriceManager")


models.user = new UserManager();
models.price = new PriceManager();


consthandler={
  get(obj, prop) {
    if(propinobj) {
      returnobj[prop];
    }


    constpascalize=string=>
      string.slice(0, 1).toUpperCase() +string.slice(1);


    thrownewReferenceError(
      `models.${prop}is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};


module.exports=newProxy(models, handler);


