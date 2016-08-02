(function () {
    'use strict';
    FusionApp
        .controller('AuthorCtrl', AuthorCtrl);

        function AuthorCtrl ($scope, $log, $location, AuthorResource) {
            var vm = this;
            var authors = AuthorResource.getJSON();
            var authorID = $location.search().uuid;
            var authorIndex = _.findIndex(authors, function (o) {
                return o.uuid == authorID;
            });

            $scope.author = authors[authorIndex];

            vm.removeCourse = function removeCourse(i) {
                $scope.author.courses.splice(i, 1);
            }

        }
})();
