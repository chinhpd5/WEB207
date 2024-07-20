const app = angular.module("myApp",[]);

function myFunction($scope){
    $scope.regex ='/^\S+@\S+\.\S+$/';
    $scope.listData=[
        {
            gender: "other",
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
            ],
            subject: "WEB207",
            name: "chinhpd5",
            age: 20
        }
    ]
    
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

    $scope.listSubject =[
        {
            id: 'WEB207',
            name: 'Frontend Framework'
        },
        {
            id: 'WEB208',
            name: 'PHP 2'
        },
        {
            id: 'WEB209',
            name: 'PHP 3'
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
        ],
        subject: $scope.listSubject[0].id
    }

    

    $scope.onSubmit = function(){
        // console.log($scope.dataInput);
        // khi form (tất các input) không có lỗi 
        if($scope.frm.$valid){
            $scope.listData.push(angular.copy($scope.dataInput))
        }
        console.log($scope.listData);
    }



}

app.controller("myController",myFunction)