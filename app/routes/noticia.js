module.exports = (app)=>{
    app.get('/noticia',(req,res)=>{
        const connection = app.config.dbConnection();
        connection.query('select * from noticias where id_noticia = 1',(err,result)=>{
            if(err)
                console.log(err) 
            res.render('noticias/noticia',{noticia: result});
        })
    })

}