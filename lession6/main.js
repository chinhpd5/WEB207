const app = angular.module("myApp",[]);

function myFunction($scope){

    $scope.show = function(){

        if($scope.diem >10 || $scope.diem < 0){
            $scope.message ="Lỗi"
        }else if($scope.diem < 5){
            $scope.message ="Yếu"
        }else if($scope.diem < 7){
            $scope.message ="Trung bình"
        }else if($scope.diem < 9){
            $scope.message ="Khá"
        }else{
            $scope.message ="Giỏi"
        }
    }

    $scope.caculator = function(){
        // console.log($scope.a);
        // console.log($scope.b);

        $scope.tong = Number($scope.a) + Number($scope.b);
        $scope.tich = Number($scope.a) * Number($scope.b);
        // console.log($scope.tong);
    }

    $scope.sayHello = function(){
        $scope.message = `Hello ${$scope.txtContent}`
    }
    
    $scope.count = 0;
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