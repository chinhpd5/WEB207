window.ProductController = function($scope,$http,$location){
    $scope.listProduct =[];
    $scope.listCategory =[];
    $scope.dataInput={};

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
                    console.log(res.data);
                    $scope.listCategory = res.data;
                    // lựa chọn mặc định phần tử đầu tiên trong select option
                    if($scope.listCategory.length > 0){
                        $scope.dataInput.categoryId = $scope.listCategory[0].id
                    }
                },
                function error(){
                    alert("Lấy danh sách thất bại")
                }
            )
    }


    getProducts()

    getCategories()

    $scope.onAdd = function(){
        if($scope.frm.$valid){
            // console.log($scope.dataInput);
            $http.post('http://localhost:3000/products',$scope.dataInput)
                .then(
                    function success(){
                        // alert("Thêm thành công")
                        // chuyển về trang danh sách sản phẩm
                        $location.url('/product')
                    },
                    function error(){
                        alert("Thêm thất bại")
                    }
                )
        }
    }
}