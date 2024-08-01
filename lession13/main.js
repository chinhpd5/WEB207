/**
 * Yêu cầu:
 * Thực hiện chức năng Danh sách, Thêm, Sửa, Xóa cho User
 * Danh sách hiển thị các thông tin 
 * - lưu ý: Quê quán hiển thị theo tên quê quán
 * Thêm mới, cập nhật:
 * Validate: 
 *  - Họ và tên: Không để trống
 *  - code: Không để trống, tối thiểu 5 kí tự
 *  - year (number): Không để trống, giá trị min 1990
 *  - home: sử dụng select-option , lựa chọn mặc định giá trị cuối cùng
 */

const app = angular.module("myApp",["ngRoute"])

app.config(function($routeProvider){

    $routeProvider
        .when('/user',{
            templateUrl:'./views/list.html',
            controller: ListController
        })
        .when('/user/add',{
            templateUrl:'./views/add.html',
            controller: AddController
        })
        .when('/user/edit/:id',{
            templateUrl:'./views/edit.html',
            controller: EditController
        })

})