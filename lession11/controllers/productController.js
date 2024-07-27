window.ProductController = function($scope,$http,$location,$routeParams){
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
                    // console.log(res.data);
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

    // thêm mới
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

    //Xóa
    $scope.onDelete = function(id){
        // console.log(id);
        if(confirm("Bạn có chắc chắn muốn xóa không?")){
            $http.delete(`http://localhost:3000/products/${id}`)
                .then(
                    function success(){
                        // alert("Xóa thành công")
                    },
                    function error(){
                        alert("Xóa thất bại")
                    }
                )
        }
    }

    // Sửa
    // lấy id trên url
    if($routeParams.id){
        const id = $routeParams.id
        // console.log(id);
        getProductById(id)
    }
    // lấy thông tin sản phẩm theo id
    function getProductById(id){
        $http.get(`http://localhost:3000/products/${id}`)
            .then(
                function success(res){
                    console.log(res.data);
                    // đổ dữ liệu ra form
                    $scope.dataInput = res.data;
                },
                function error(){
                    alert("Lấy thông tin thất bại")
                }
            )
    }
    // cập nhật dữ liệu vào db.json
    $scope.onUpdate = function(){
        if($scope.frm.$valid){
            $http.put(`http://localhost:3000/products/${$scope.dataInput.id}`,$scope.dataInput)
                .then(
                    function success(){
                        // chuyển về trang danh sách
                        $location.url('/product')
                    },
                    function error(){
                        alert("Cập nhật thất bại")
                    }
                )
        }
    }
}