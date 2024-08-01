window.EditController = function($scope,$http,$location,$routeParams){

    if($routeParams.id){
        const id = $routeParams.id;
        // console.log(id);
        getUserById(id);
    }
    
    function getUserById(id){
        $http.get(`http://localhost:3000/users/${id}`)
            .then(
                function success(res){
                    console.log(res.data);
                    $scope.dataInput = res.data
                },
                function error(){
                    alert("Lấy thông tin thất bại")
                }
            )
    }

    function getHomes(){
        $http.get('http://localhost:3000/homes')
            .then(
                function succcess(res){
                    // console.log(res.data);
                    $scope.listHome= res.data
                    // $scope.dataInput.home = $scope.listHome[$scope.listHome.length - 1].id
                },
                function error(){
                    alert("Lỗi")
                }
            )
    }

    getHomes();

    $scope.onUpdate = function(){
        if($scope.frm.$valid){
            // console.log($scope.dataInput);
            $http.put(`http://localhost:3000/users/${$scope.dataInput.id}`,$scope.dataInput)
                .then(
                    function success(){
                        $location.url('/user')
                    },
                    function error(){
                        alert("Cập nhật thất bại")
                    }
                )
        }
    }

}