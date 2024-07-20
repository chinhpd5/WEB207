const app = angular.module("myApp",[]);

function myFunction($scope){
    $scope.listData=[
        {
            hobbies: [
                {
                    text: "Đá bóng",
                    name: "football",
                    value: true
                },
                {
                    text: "Bơi",
                    name: "swim",
                    value: false
                },
                {
                    text: "Chạy",
                    name: "run",
                    value: true
                }
            ],
            name: "chinhpd5",
            age: 20,
            gender: "men",
            note: "ghi chú"
        }
    ]

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

    $scope.listSubject =[
        {
            id: "web207",
            name: "Frontend Framework"
        },
        {
            id: "web208",
            name: "Node JS"
        },
        {
            id: "web209",
            name: "Type script"
        }
    ]

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
                value: true
            },
            {
                text: "Chạy",
                name: "run",
                value: true
            }
        ],
        gender: $scope.listGender[$scope.listGender.length -1].value,
        subject: $scope.listSubject[1].id
    };
    

    $scope.onSubmit = function(){
        // console.log($scope.dataInput);
        if($scope.frm.$valid){
            $scope.listData.push(angular.copy($scope.dataInput))
        }

        console.log($scope.listData);
    }
}

app.controller("myController",myFunction)