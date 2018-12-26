const mysql = require('mysql');

const connMySQL = ()=>{
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'mysql@2089',
		database : 'portal_noticias'
	});
}

module.exports =  ()=> {
	
	return connMySQL;
}