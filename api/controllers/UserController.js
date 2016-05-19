/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	
	cadastrar: function(req, res){
		console.log("batata");
		
		//	var params = req.params.all();
		
		User.create({
			nome: req.param('nome'),
			email: req.param('email'),
			senha: req.param('senha')
		}).exec(function userCreated(err,newUser){
			if(err){
				console.log("Erro: ", err);
				return res.negotiate(err);
			}
			console.log("Created a user with the name:", newUser.nome);
//			req.session.me = newUser.id;
			
			return res.json({
				id: newUser.id
			});
				
		});
	}
};

