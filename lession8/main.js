const app = angular.module("myApp",[]);

function myFunction($scope){
    $scope.dataInput={}

    $scope.onSubmit = function(){
        console.log($scope.dataInput);
    }
}

app.controller("myController",myFunction)