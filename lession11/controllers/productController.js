window.ProductController = function($scope,$http){
    $scope.listProduct =[];
    $scope.listCategory =[]

    // lấy danh sách product
    function getProducts(){
        $http.get('http://localhost:3000/products')
            .then(
                function success(res){
                    // console.log(res.data);
                    $scope.listProduct = res.data
                },
                function error(){
                    alert("Lấy danh sách thất bại")
                }
            )
    }

    // lấy danh sách category
    function getCategories(){
        $http.get('http://localhost:3000/categories')
            .then(
                function success(res){
                    // console.log(res.data);
                    $scope.listCategory = res.data
                },
                function error(){
                    alert("Lấy danh sách thất bại")
                }
            )
    }


    getProducts()

    getCategories()
}