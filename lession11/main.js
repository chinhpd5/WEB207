const app = angular.module("myApp",['ngRoute'])

app.config(function($routeProvider){
    // khai báo các đường dẫn
    $routeProvider
        .when('/home',{
            templateUrl: './views/home.html',
            controller: HomeController
        })
        .when('/about',{
            templateUrl: './views/about.html',
            controller: AboutController
        })
        .when('/product',{
            templateUrl: './views/product/list.html',
            controller: ProductController
        })
        .when('/product/add',{
            templateUrl: './views/product/add.html',
            controller: ProductController
        })

})