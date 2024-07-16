const app = angular.module("myApp",[]);

function parentController($scope){
    $scope.messParent =" Parent"
}

function children1Function($scope, $rootScope){
    $scope.messChild1 = "children 1";
    $rootScope.messGlobal = "From children 1"
}

function children2Function($scope){
    $scope.messChild2 = "children 2"
}

app.controller("parentController",parentController)
app.controller("childrenController1",children1Function)
app.controller("childrenController2",children2Function)