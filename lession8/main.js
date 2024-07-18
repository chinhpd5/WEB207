const app = angular.module("myApp",[]);

function myFunction($scope){
    $scope.dataInput={};
    $scope.listGender =[
        {
            name: "Nam",
            value: "men"
        },
        {
            name: "Nữ",
            value: "women"
        },
        {
            name: "Khác",
            value: "other"
        }
    ]

    $scope.onSubmit = function(){
        console.log($scope.dataInput);
    }
}

app.controller("myController",myFunction)