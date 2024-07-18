const app = angular.module("myApp",[]);

function myFunction($scope){
    $scope.listGender= [
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

    $scope.dataInput={
        gender : $scope.listGender[$scope.listGender.length - 1].value
    }

    

    $scope.onSubmit = function(){
        console.log($scope.dataInput);
    }



}

app.controller("myController",myFunction)