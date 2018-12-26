module.exports.noticias = (application, req, res)=>{
	const connection = application.config.dbConnection();
	const noticiasDao = new application.app.models.NoticiasDAO(connection);

	noticiasDao.getNoticias((error, result)=>{
		if(error)
			console.log(error)
		res.render("noticias/noticias", {noticias : result});
	});	
}

module.exports.noticia = (application, req, res)=>{
	const connection = application.config.dbConnection();
	const noticiasDao = new application.app.models.NoticiasDAO(connection);

	noticiasDao.getNoticia((error, result)=>{
		if(error)
			console.log(error)
		res.render("noticias/noticia", {noticia : result});
	});	
}