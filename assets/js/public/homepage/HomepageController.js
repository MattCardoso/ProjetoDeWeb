angular.module('HomepageModule').controller('HomepageController',['$scope', '$http', function($scope, $http){
	
	$scope.submitLoginForm = function(){
		
	},
	
	$scope.submitSignupForm = function(){
		console.log("submit");
		$http.post('/cadastro',{
			nome: $scope.cadastro.nome,
			email: $scope.cadastro.email,
			senha: $scope.cadastro.senha,
			
		})
		.then(function onSuccess(sailsResponse){
			console.log($scope.cadastro.nome+"123");
			window.location = '/user';
		})
		.catch(function onError(sailsResponse){
			console.log("Deu erro no cadastro");
		})
	};
	
	
}]);