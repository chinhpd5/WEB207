window.EditController = function($routeParams,$http,$scope,$location){

    if($routeParams.id){
        const id = $routeParams.id
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
                    alert("Lỗi")
                }
            )
    }

    function getHomes(){
        $http.get('http://localhost:3000/homes')
            .then(
                function success(res){
                    // console.log(res.data);
                    $scope.listHome = res.data;
                },
                function error(){
                    alert("lỗi")
                }
            )
    }

    getHomes();

    $scope.onUpdate = function(){
        if($scope.frm.$valid){
            $http.put(`http://localhost:3000/users/${$scope.dataInput.id}`,$scope.dataInput)
                .then(
                    function success(){
                        $location.url('/user')
                    },
                    function error(){
                        alert("Lỗi")
                    }
                )
        }
    }
}