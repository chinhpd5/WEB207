const app = angular.module("myApp",[]);

function myFunction($scope){
    $scope.name = "chinh"

    $scope.txtName = "Chinhpd5";
    $scope.age = 20
    $scope.info = {
        name: "Angular JS",
        description: "Font-end Framework"
    }
    $scope.myLove = ["Linh","Hồng","Hoa"]

    $scope.data =[
        {
            name: "chinhpd5",
            age: 20,
            gender: "Nam",
            mark: 10
        },
        {
            name: "chinhpd6",
            age: 21,
            gender: "Nữ",
            mark: 9
        },
        {
            name: "chinhpd8",
            age: 19,
            gender: "Nam",
            mark: 6
        },
        {
            name: "chinhpd9",
            age: 22,
            gender: "Nữ",
            mark: 8
        }

    ]
}

app.controller("myController",myFunction)