# node_template
> A template for nodejs with orm mysql2  

* NodeJS
* Koa
* ORM
* Sequelize
* Mysql2

### Project setup
```bash
npm install
```

### Start
```bash
npm start
```

### Project structure

```
pic_online
├── controllers // visit controllers
├── lib         
├── logs        // logger file
├── middlewares // middlewares
├── models      // data
├── public      // website file
│   ├── dist
│   ├── public
│   └── src
└── routes      // routes
```

### Config

> All configure in `./models/config.js` 
> Note: it will auto-add '/' after `bsae_dir` if it does not end with '/'  
> Sql file: `models/init.sql`  

|     Param     |                             Default                              |            Description             |
| :-----------: | :--------------------------------------------------------------: | :--------------------------------: |
|     port      |                              `3000`                              |       Server Listening port        |
|      log      |                                -                                 |          logger configure          |
|  log.logName  |                           `Pic_Online`                           |            logger name             |
|  log.logPath  |           `path.resolve(__dirname, '../logs/log.log')`           |       logger file save path        |
|      db       |                                -                                 |           database info            |
|    db.sync    |                                -                                 |    database modles sync config     |
| db.connection | [docs](https://sequelize.org/master/manual/getting-started.html) | sequelize database connection info |

    

### Debug

> All logs will save to `./logs/log.log` as default  