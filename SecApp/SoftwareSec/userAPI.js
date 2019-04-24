var express = require('express');
var app = express();

require('dotenv').config()

const knex = require('knex')({
    client: 'mssql',
    connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : 'SE41781_KRiley'
    }
})

app.post('/createuser', function(req, res) {
    store.createUser({
        LoginName: req.body.username,
        PasswordHash: req.body.PasswordHash,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email
    })
    .then(() => res.sendStatus(200));
});
app.post('/login', function(req, res){
    try{
        res.send(knex.select('*').from('usersTable').where('LoginName', req.LoginName).andWhere('PasswordHash', req.PasswordHash));
    }catch(e){
        res.send(e);
    }
});
module.exports = {
    createUser ({...user}) {
        console.log("Api call createUser");
        return Promise.resolve();
    }
}
const selectAll = async () =>{
    const data = await knex.select('*').from('usersTable');
    return data;
}
const createUser = async () => {
    await knex('usersTable').insert({...req})
}
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
});