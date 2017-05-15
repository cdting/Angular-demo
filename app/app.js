/*
 * @Author: Tin
 * @Date:   2017-04-28 23:52:03
 * @Last Modified by:   LiouTin
 * @Last Modified time: 2017-05-01 01:18:03
 */

'use strict';
/**
 * douban Module
 *
 * Description
 */
//注册默认路由规则,并引用controller中的模块
angular.module('douban', [
        'ngRoute',
        'app.controller',
        'douban.directives.auto_focus'
    ])
    //定义规则外的路由规则
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
    }]);
