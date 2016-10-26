'use strict';

angular.module('DemoApp.controllers', []);

angular.module('DemoApp', [
    'ngMaterial',
    'hljs',
    'DemoApp.controllers'
]).config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    languages: ['javascript']
  });
});

angular.module('DemoApp.controllers')
    .controller('MainCtrl', ['$scope', '$timeout', '$sce', '$http', '$mdSidenav',
        function ($scope, $timeout, $sce, $http, $mdSidenav) {
            $scope.currentPage = $sce.trustAsResourceUrl('ejemplo-1.html');

            $scope.displayCode = false;
            $scope.titles = [''];

            $scope.toggleMenu = function () {
                $mdSidenav('left').toggle();
            };

            $scope.closeMenu = function () {
                $mdSidenav('left').close();
            };

            $scope.viewCode = function () {
                $scope.displayCode = !$scope.displayCode;
            };

            $scope.initPage = function () {
                var script = './js/script-1.js';

                $scope.displayCode = false;
                $scope.currentPage = $sce.trustAsResourceUrl('ejemplo-1.html');

                $http.get(script)
                    .success(function (data) {
                        $scope.codeContent = data;
                    });
            };

            $scope.loadPage = function (id) {
                var script = './js/script-' + id + '.js';

                $scope.displayCode = false;
                $scope.currentPage = $sce.trustAsResourceUrl('ejemplo-' + id + '.html');

                $http.get(script)
                    .success(function (data) {
                        $scope.codeContent = data;
                    });

                $scope.closeMenu();
            };

            $scope.initPage();
        }
    ]);
