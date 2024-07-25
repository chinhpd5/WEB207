const app = angular.module("myApp",["ngRoute"])

app.config(function ($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl: './views/home.html',
            controller: HomeController
        })
        .when('/about',{
            templateUrl: './views/about.html',
            controller: AboutController
        })
})
