const app = angular.module("myApp",[])

function myFunction($scope){
    $scope.name ="chinhpd5"
}
app.controller("myController",myFunction)

function parentFunction($scope){
    $scope.parentMess ="Parent"
}

function childFunction1($scope,$rootScope){
    $scope.mess1 ="child 1";
    $rootScope.rootMess = "Root Message"
}

function childFunction2($scope){
    $scope.mess2 ="child 2"
    
}

app.controller("parentController",parentFunction)
app.controller("childrenController1",childFunction1)
app.controller("childrenController2",childFunction2)