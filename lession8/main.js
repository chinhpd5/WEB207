const app = angular.module("myApp",[]);

function myFunction($scope){
    $scope.dataInput={
        hobbies : [
            {
                text: "Đá bóng",
                name: "football",
                value: false
            },
            {
                text: "Bơi",
                name: "swim",
                value: false
            },
            {
                text: "Chạy",
                name: "run",
                value: false
            }
        ]
    };
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