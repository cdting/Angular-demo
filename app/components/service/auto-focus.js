/*
 * @Author: LiouTin
 * @Date:   2017-05-01 00:56:14
 * @Last Modified by:   LiouTin
 * @Last Modified time: 2017-05-01 01:26:44
 */

(function(angular) {
    'use strict';
    //定义一个指令用于菜单点击后是否选中状态
    angular.module('douban.directives.auto_focus', [])
        .directive('autoFocus', ['$location',
            function($location) {
                //获得当前url中的路径
                var path = $location.path(); // /in_theaters/1
                return {
                    restrict: 'A', //E = Element, A = Attribute, C = Class, M = Comment
                    link: function($scope, iElement, iAttrs) {
                        //获得点击a标签上的href值和path的值比较是否点击是当前
                        var aLink = iElement.children().attr('href'); //获得a标签的href值

                        var type = aLink.split('!')[1];

                        //页面首次加载获取的a标签是否曰path的值开头
                        if (path.startsWith(type)) {
                            //设置当前元素
                            //主要用于输入地址页面加载时判断选中那个
                            iElement.addClass('active');
                        };
                        iElement.on('click', function() {
                            //点击当前元素，去除所有li的选中状态
                            iElement.parent().children().removeClass('active');
                            //设置当前点击选中状态
                            iElement.addClass('active');
                        })
                    }
                };
            }
        ])
})(angular);
