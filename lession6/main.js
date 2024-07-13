const app = angular.module("myApp",[]);

function myFunction($scope){
    
    $scope.txtName = "Chinhpd5";
}

app.controller("myController",myFunction)