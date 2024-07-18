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
        gender : $scope.listGender[$scope.listGender.length - 1].value,
        hobbies: [
            {
                name: "football",
                text: "Đá bóng",
                value: true
            },
            {
                name: "swim",
                text: "Bơi",
                value: true
            },
            {
                name: "run",
                text: "Chạy",
                value: false
            }
        ]
    }

    

    $scope.onSubmit = function(){
        console.log($scope.dataInput);
    }



}

app.controller("myController",myFunction)