window.AddController= function($scope,$http,$location){
    $scope.listHome=[];
    $scope.dataInput={};
    
    function getHomes(){
        $http.get('http://localhost:3000/homes')
            .then(
                function succcess(res){
                    console.log(res.data);
                    $scope.listHome= res.data

                    $scope.dataInput.home = $scope.listHome[$scope.listHome.length - 1].id
                },
                function error(){
                    alert("Lỗi")
                }
            )
    }

    getHomes();

    $scope.onAdd = function(){
        if($scope.frm.$valid){
            // console.log($scope.dataInput);
            $http.post('http://localhost:3000/users',$scope.dataInput)
                .then(
                    function success(){
                        $location.url('/user')
                    },
                    function error(){
                        alert("Thêm thất bại")
                    }
                )
        }
    }
}