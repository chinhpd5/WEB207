const app = angular.module("myApp",[]);

function myFunction($scope,$http){
    $scope.regex ='/^\S+@\S+\.\S+$/';
    $scope.listData=[]
    
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
            // $scope.listData.push(angular.copy($scope.dataInput))
            // thêm mới sử dụng phương post
            $http.post("http://localhost:3000/students",$scope.dataInput)
                .then(
                    // nếu thành công
                    function success(){
                        alert("Thêm thành công")
                    },
                    // nếu thất bại
                    function error(){
                        alert("Thêm thất bại")
                    }
                )

        }
        console.log($scope.listData);
    }

    // khai báo
    function getStudent(){
        // lấy danh sách student
        $http.get('http://localhost:3000/students')
            .then(
                function success(response){
                    // console.log(response);
                    $scope.listData = response.data;
                    console.log($scope.listData);
                },
                function error(){
                    alert("Lấy thông tin thất bại")
                }
            )

    }
    getStudent();

}

app.controller("myController",myFunction)