module.exports.index = function(application, req, res){
	const con = application.config.dbConnection();
	const noticiasDAO = new application.app.models.NoticiasDAO(con);

	noticiasDAO.get5UltimasNoticias((error,result)=>{
		console.log(result);
		res.render("home/index",{noticias: result});
	});
	
	
}