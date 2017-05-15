/*
 * @Author: LiouTin
 * @Date:   2017-04-30 22:55:50
 * @Last Modified by:   Tin
 * @Last Modified time: 2017-05-01 11:00:37
 */

(function(angular) {
    'use strict';

    //注册一个服务，先定义模块
    angular.module('http.service', [])
        //定义服务
        .service('httpService', ['$window',
            '$document',
            '$location',
            function($window,
                $document,
                $location
            ) {
                //注册一个服务函数,用于请求jsop数据
                this.jsonp = function(url, pars, callback) {

                    url.indexOf('?') === -1 ? url += '?' : url += '&';

                    //拼接jsonp回掉函数
                    var callbackName = 'callback_name_' + Math.random().toString().replace('.', '');

                    //jsonp请求成功后，执行回掉函数
                    $window[callbackName] = function(data) {
                        //将获得数据在传给一个回掉函数
                        callback(data);
                        //回掉函数执行完毕后删除script标签
                        $document[0].body.removeChild(script);

                    };

                    //拼接url参数
                    for (var key in pars) {
                        url += key + '=' + pars[key] + '&';
                    }

                    url += 'callback=' + callbackName;

                    //生成script标签
                    var script = $document[0].createElement('script');
                    script.src = url;


                    $document[0].body.appendChild(script);


                    console.log($location.path());
                    console.log(script);
                    console.log(url);
                }
            }
        ])
})(angular);
