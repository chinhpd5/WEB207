const app = angular.module("myApp",[]);

function myFunction($scope,$http){
    $scope.type = 'add';
    $scope.listStudents=[];
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
        // console.log($scope.type);
        // return;
        if($scope.frm.$valid){

            if($scope.type == 'add'){
                // $scope.listData.push(angular.copy($scope.dataInput))
                // call api thêm mới
                // thêm mới : post
                $http.post('http://localhost:3000/students',$scope.dataInput)
                    .then(
                        // nếu thành công -> success
                        function success(response){
                            alert("Thêm thành công")
                        },
                        // thất bại -> error
                        function error(response){
                            alert("Thêm thất bại")
                        }
                    )
            }else if($scope.type == 'edit'){

                // console.log($scope.dataInput);
                // cập nhật
                $http.put(`http://localhost:3000/students/${$scope.dataInput.id}`,$scope.dataInput)
                    .then(
                        function success(){
                            alert("Sửa thành công")
                        },
                        function error(){
                            alert("Sửa thất bại")
                        }
                    )
            }
           
        }

    }

    // lấy danh sách students
    // khai báo
    function getList(){
        $http.get('http://localhost:3000/students')
            .then(
                function success(response){
                    // console.log(response);
                    // gán data nhận lại cho $scope.listStudents
                    $scope.listStudents = response.data
                    console.log($scope.listStudents);
                },
                function error(response){
                    alert("Lấy danh sách thất bại")
                }
            )
    }

    // gọi
    getList();


    // xóa

    $scope.onDelete = function(id){
        // console.log(id);
        if(confirm("Bạn có chắc chắn muốn xóa không?")){
            $http.delete(`http://localhost:3000/students/${id}`)
                .then(
                    function success(){
                        alert("Xóa thành công")
                    },
                    function error(){
                        alert("Xóa thất bại")
                    }
                )
        }
    }

    // Sửa
    $scope.onEdit = function(id){
        // thay đổi trạng thái của form
        $scope.type ='edit'

        // console.log(id);
        // lấy thông students theo id
        $http.get(`http://localhost:3000/students/${id}`)
            .then(
                function success(res){
                    // console.log(res);
                    $scope.dataInput = res.data;
                },
                function error(){
                    alert("Lấy thông tin thất bại");
                }
            )


    }
}

app.controller("myController",myFunction)