const mysql = require('promise-mysql');

const db_conf = {
    host: 'y913929d.beget.tech',
    user: 'y913929d_mymeans',
    password: '123456',
    database: 'y913929d_mymeans'
}

const get = ({id, res}) => {

    res.send(
        {
            id
        }
    );

}

const getList = ({offset, limit, filter, res}) => {

    // {"borderColor": "#333", "backgroundColor": "#333"}

    let connection;
    mysql.createConnection(db_conf)
        .then(function (conn) {
            connection = conn;
        })
        .then(function(){
            return connection.query(`SELECT * FROM ${db_conf.database}.news`);
        })
        .then((rows) => {

            res.send(
                {
                    items: rows,
                    count: rows.length
                }
            );

            connection.end();
        })
        .catch((error) => {
            res.sendStatus(500);
            if (connection && connection.end) connection.end();
            console.log(error);
        })

}

const init = (app) => {

    app.get(
        '/get',
        (req, res) => get({...req.query, res})
    )

    app.post(
        '/list',
        (req, res) => getList({...req.body, res})
    )

}

module.exports = ({init});