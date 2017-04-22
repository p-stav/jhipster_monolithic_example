(function() {
    'use strict';

    angular
        .module('jhipsterMonolithicExampleApp')
        .controller('BlogDetailController', BlogDetailController);

    BlogDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Blog', 'User'];

    function BlogDetailController($scope, $rootScope, $stateParams, previousState, entity, Blog, User) {
        var vm = this;

        vm.blog = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterMonolithicExampleApp:blogUpdate', function(event, result) {
            vm.blog = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
