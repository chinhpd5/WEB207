const app = angular.module("myApp",[]);

function myFunction($scope){
    $scope.name = "chinhpd5"
    $scope.age = 20
    $scope.info = {
        name: "Angular JS",
        note: "Front-end Framework"
    }
    $scope.myLove = ["Mai","Hồng","Huệ"];

    $scope.data = [
        {
            name: "chinhpd5",
            age:20,
            gender: "Nam",
            mark: 10
        },
        {
            name: "chinhpd6",
            age:21,
            gender: "Nữ",
            mark: 7
        },
        {
            name: "chinhpd7",
            age:19,
            gender: "Nam",
            mark: 6
        },
        {
            name: "chinhpd8",
            age:22,
            gender: "Nữ",
            mark: 8
        }
    ]

}

app.controller("myController",myFunction)