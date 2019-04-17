var knex = require('knex')({
    client: 'mssql',
    connection: {
        host : 'sql.neit.edu',
        port : 4500,
        user : '001417108',
        password : '001417108',
        database : 'SE41781_KRiley'
    }
});
const selectAll = async () =>{
    const data = await knex.select('*').from('usersTable');
    return data;
}
var user = {
    LoginName: 'egger',
    PasswordHash: 'testing',
    FirstName: 'inserting',
    LastName: 'user',
}
const createUser = async () => {
    await knex('usersTable').insert({...user})
}
createUser();
selectAll().then(data => {
    console.log(data);
})

