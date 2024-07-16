const app = angular.module("myApp",[])

function parentFunction($scope){

}

function childFunction1($scope){
    $scope.mess1 ="child 1"
}

function childFunction2($scope){
    $scope.mess2 ="child 2"
    
}

app.controller("parentController",parentFunction)
app.controller("childrenController1",childFunction1)
app.controller("childrenController2",childFunction2)