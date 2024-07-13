const app = angular.module("myApp",[]);

function myFunction($scope){
    $scope.name ="chinhpd5"
}

app.controller("myController",myFunction)