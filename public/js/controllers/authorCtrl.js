(function () {
    'use strict';
    FusionApp
        .controller('AuthorCtrl', AuthorCtrl);

        function AuthorCtrl ($scope, $log, $location, AuthorResource) {
            var vm = this;
            vm.authorID = $location.search().uuid;
            // For now, look for the user based on pre-set JSON data
            // Later, bring in the service and the data, create and resolve promises
            // and error messages
            vm.testUser = _.findIndex(AuthorResource, function (o) {
                return o.uuid == vm.authorID;
            });
            //vm.courses = AuthorResource.indexOf(vm.author);
            $scope.author = AuthorResource[vm.testUser];
            console.log(AuthorResource[vm.testUser]);
        }
})();
