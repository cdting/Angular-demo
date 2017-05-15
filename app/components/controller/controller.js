/*
 * @Author: LiouTin
 * @Date:   2017-04-30 22:55:33
 * @Last Modified by:   LiouTin
 * @Last Modified time: 2017-05-01 08:22:41
 */

(function(angular) {
    'use strict';

    //定义controller模块，并引用http.service模块
    angular.module('app.controller', [
            'ngRoute',
            'http.service'
        ])
        //定义路由规则
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/subject/:id', {
                    templateUrl: 'components/controller/detail.html',
                    controller: 'detailController'
                })
                .when('/:type/:page', {
                    templateUrl: 'components/controller/view.html',
                    controller: 'doubanController'
                });
        }])
        //定义路由规则中的控制器,并载入app.service中定义的服务
        .controller('doubanController', [
            '$scope',
            '$routeParams',
            '$route',
            'httpService',
            function(
                $scope,
                $routeParams,
                $route,
                httpService) {
                //定义向外暴露数据

                $scope.title = "";
                $scope.subjects = [];

                //调用httpService服务中函数，并获得jsonp请求的数据
                httpService.jsonp(
                    'http://api.douban.com/v2/movie/' + $routeParams.type, { "page": $routeParams.page },
                    function(data) {
                        $scope.title = data.title;

                        $scope.subjects = data.subjects;


                        $scope.$apply();
                    })
            }
        ])
        .controller('detailController', [
            '$scope',
            '$routeParams',
            '$route',
            'httpService',
            function(
                $scope,
                $routeParams,
                $route,
                httpService) {
                //定义向外暴露数据

                //调用httpService服务中函数，并获得jsonp请求的数据
                httpService.jsonp(
                    'http://api.douban.com/v2/movie/subject/' + $routeParams.id, {},
                    function(data) {
                        $scope.title = data.title;
                        $scope.imgsrc = data.images;
                        $scope.summary = data.summary;



                        console.log(data);
                        $scope.$apply();
                    })
            }
        ]);

})(angular);
