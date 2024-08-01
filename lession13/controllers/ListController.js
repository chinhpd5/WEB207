window.ListController = function($http,$scope){
    $scope.listUser=[]
    $scope.listHome=[]

    function getUsers(){
        $http.get('http://localhost:3000/users')
            .then(
                function success(res){
                    console.log(res.data);
                    $scope.listUser = res.data
                },
                function error(){
                    alert("Lỗi")
                }
            )
    }

    getUsers()

    function getHomes(){
        $http.get('http://localhost:3000/homes')
            .then(
                function succcess(res){
                    console.log(res.data);
                    $scope.listHome= res.data
                },
                function error(){
                    alert("Lỗi")
                }
            )
    }

    getHomes()

    $scope.onDelete = function(id){
        // console.log(id);
        if(confirm("Bạn có chắc chắn muốn xóa không?")){
            $http.delete(`http://localhost:3000/users/${id}`)
                .then(
                    function success(){
                    },
                    function error(){
                        alert("Xóa thất bại")
                    }
                )
        }
    }
}