(function () {
    'use strict';

    angular
        .module('jhipsterMonolithicExampleApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
