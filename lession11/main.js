const app = angular.module("myApp",['ngRoute'])

app.config(function($routeProvider){
    // khai báo các đường dẫn
    $routeProvider
        .when('/home',{
            templateUrl: './views/home.html'
        })
        .when('/about',{
            templateUrl: './views/about.html'
        })

})