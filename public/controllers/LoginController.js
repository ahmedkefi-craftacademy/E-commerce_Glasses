
Movie_Store_App.controller('LoginController',['$scope','$location','$rootScope','UserLoginFactory','$cookies', function($scope, $location, $rootScope, UserLoginFactory, $cookies){




$scope.submitLogin = function(){


//console.log("submit login fired");
//console.log("submitted email  :  " + $scope.submittedEmail);
//console.log("submitted password  :  " + $scope.submittedPassword);


//$scope.user = UserLoginFactory.get({ email: $scope.submittedEmail }); //Get a single user


UserLoginFactory.get({ email: $scope.submittedEmail }, function(data) {
	$scope.user = data;
	//console.log($scope.user.Password);






console.log($scope.user);

if ($scope.submittedPassword.toString() === $scope.user.Password.toString())
	{   $rootScope.loggedIn = true;
		$location.path('/Cart/'+$scope.user._id);

$cookies.put('userId', $scope.user._id);



	}

		else
			{alert('Wrong email or password');}



}); 

};


}]);




