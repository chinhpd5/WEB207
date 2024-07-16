const app = angular.module("myApp",[]);

function myFunction($scope){

    $scope.show= function(){
        //7
        // console.log(diem);

        var diem = Number($scope.diem)
        // console.log(diem);

        if(diem < 0 || diem > 10){
            $scope.showKq = "Lỗi"
        }
        else if(diem <= 5){
            $scope.showKq = "Yếu"
        }
        else if(diem <= 7){
            $scope.showKq ="Trung bình"
        }else if(diem <= 9){
            $scope.showKq ="Khá"
        }else{
            $scope.showKq ="Giỏi"
        }
    }

    $scope.tinhToan = function(){
        // console.log($scope.a);
        // console.log($scope.b);

        $scope.tong = Number($scope.a) + Number($scope.b)
        $scope.tich = Number($scope.a) * Number($scope.b)
        // console.log($scope.tong);
    }

    $scope.sayHello = function(){
        $scope.message = `Hello ${ $scope.txtContent }`
    }
    $scope.count =0;
    $scope.txtName ="abc"

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