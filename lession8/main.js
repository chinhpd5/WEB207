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
        // console.log($scope.dataInput);
        $scope.listData.push(angular.copy($scope.dataInput))

        // console.log($scope.listData);
    }
}

app.controller("myController",myFunction)