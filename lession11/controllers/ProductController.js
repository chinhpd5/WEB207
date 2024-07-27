window.ProductController = function($scope,$http,$location,$routeParams){
    $scope.listProduct =[]
    $scope.listCategory =[];
    $scope.dataInput ={};
    // lấy danh sách sản phẩm từ db.json
    function getProducts(){
        $http.get('http://localhost:3000/products')
            .then(
                function success(res){
                    // console.log(res.data);
                    $scope.listProduct = res.data;
                },
                function error(){
                    alert("Lấy danh sách thất bại")
                }
            )
    }

    // lấy danh sách danh mục
    function getCategories(){
        $http.get('http://localhost:3000/categories')
            .then(
                function success(res){
                    // console.log(res.data);
                    $scope.listCategory = res.data;
                    if($scope.listCategory.length > 0){
                        $scope.dataInput.categoryId = $scope.listCategory[0].id
                    }
                },
                function error(){
                    alert("Lấy danh sách thất bại")
                }
            )
    }

    getProducts();

    getCategories();

    // Thêm mới product vào db.json
    $scope.onAdd = function(){
        if($scope.frm.$valid){
            // console.log($scope.dataInput);
            $http.post('http://localhost:3000/products',$scope.dataInput)
                .then(
                    function success(){
                        // alert("Thêm thành công")
                        // sau khi thêm thành công -> danh sách
                        $location.url('/product')
                    },
                    function error(){
                        alert("Thêm thất bại")
                    }
                )
        }
    }

    // Xóa product

    $scope.onDelete= function(id){
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
    if($routeParams.id){
        const id = $routeParams.id
        // console.log(id);
        getProductById(id)
    }

    function getProductById(id){
        $http.get(`http://localhost:3000/products/${id}`)
            .then(
                (res)=>{
                    console.log(res.data);
                    $scope.dataInput = res.data;
                },
                ()=>{
                    alert("Láy thông tin thất bại")
                }
            )
    }

    $scope.onUpdate = function(){
        if($scope.frm.$valid){
            // console.log($scope.dataInput);
            // return;
            $http.put(`http://localhost:3000/products/${$scope.dataInput.id}`,$scope.dataInput)
                .then(
                    function success(){
                        $location.url('/product')
                    },
                    function error(){
                        alert("Sửa thất bại")
                    }
                )
        }
    }
}