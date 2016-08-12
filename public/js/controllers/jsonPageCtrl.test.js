(function () {
    'use strict';
    describe('Controller: JsonPageCtrl', function () {

        var scope, vm, location, mockedJsonToSet, DatabaseResource;

        beforeEach(module('FusionApp'));

        beforeEach(inject(function ($rootScope, $controller, $location, $q) {
            scope = $rootScope.$new();
            location = $location;
            var defer = $q.defer();

            // Mock out the DatabaseResource resource
            DatabaseResource = {
                sendToDB: function (json) {
                    if (json) {
                        defer.resolve({
                            message: 'Successfully added json entry to DB'
                        });
                    } else if (!json || Object.keys(json).length === 0) {
                        defer.reject({
                            message: 'You must provide a valid JSON structure'
                        });
                    }
                    return defer.promise;
                },
                getFromDB: function (uuid) {
                    if (uuid.uuid) {
                        defer.resolve({
                            data: 'fake structure'
                        });
                    } else if (uuid.uuid === null) {
                        defer.reject({
                            error: 'Cannot find a JSON structure with that UUID number'
                        });
                    }
                    return defer.promise;
                }
            };
            vm = $controller('JsonPageCtrl', {
                $scope: scope,
                DatabaseResource: DatabaseResource
            });

            mockedJsonToSet = `{
              "uuid": "16ad4b46-a81a-43f9-bf60-9169ffc3a137",
              "authors": [
                {
                  "name": "David Stevens",
                  "uuid": "d0f98472-3e8f-42bb-62c8-21552ecf770c",
                  "type": "author",
                  "courses": [
                    {
                      "name": "New Course 101",
                      "uuid": "d62f33d4-671a-45aa-6fd2-be522192d661",
                      "year": "2011"
                    }
                  ]
                }
              ],
              "teachers": [
                {
                  "name": "Delilah Evans",
                  "uuid": "d1939042-85e7-4eb6-4579-0ace07183d6d",
                  "type": "teacher",
                  "classes": [
                    {
                      "name": "Intro to Hierarchical Structures",
                      "uuid": "e06fa581-9380-4dda-b409-4afc7c3b8253",
                      "teaching_courses": [
                        {
                          "uuid": "eb287bdf-adae-4f7c-3e7b-8642db102d9e",
                          "name": "Organizational Patterns"
                        }
                      ],
                      "students": [
                        {
                          "uuid": "a9374789-fd1b-40b8-f1ed-167a24f90fc7",
                          "name": "Understanding Fragmented Systems"
                        }
                      ]
                    }
                  ]
                }
              ]
          }`;
        }));

        it('should output the json into the view', function () {
            // The json structure should be turned into a string
            // then displayed in the view's input field.
            expect((typeof vm.json_output)).toEqual('string');
        });

        it('should update the view with new json data', function () {
            // Set the new JSON to a new string. This is to represent
            // If a user changed their data around in the view.
            vm.json_output = mockedJsonToSet;
            vm.replaceJsonData();
            expect(vm.newJson.authors[0].name).toEqual('David Stevens');
            expect(vm.newJson.teachers[0].name).toEqual('Delilah Evans');
        });

        it('DatabaseResource sendToDB: success message', function () {
            var successMessage;
            vm.json_output = mockedJsonToSet;

            // Call the database resource
            DatabaseResource.sendToDB(vm.json_output)
                .then(function (data) {
                    successMessage = data.message;
                });
            vm.sendToDB();

            // Use scope.$apply to send the resource through the digest cycle.
            scope.$apply();
            expect(successMessage).toEqual('Successfully added json entry to DB');
        });

        it('DatabaseResource sendToDB: reject message', function () {
            var errorMessage;
            vm.json_output = mockedJsonToSet;

            // Call the database resource
            DatabaseResource.sendToDB()
                .catch(function (data) {
                    errorMessage = data.message;
                });
            vm.sendToDB();

            // Use scope.$apply to send the resource through the digest cycle.
            scope.$apply();
            expect(errorMessage).toEqual('You must provide a valid JSON structure');
        });

        it('DatabaseResource getFromDB: success message', function () {
            var successMessage;
            // Define a mocked uuid number
            scope.uuid = '16ad4b46-a81a-43f9-bf60-9169ffc3a137';

            // Call the database resource
            DatabaseResource.getFromDB({ uuid:scope.uuid })
                .then(function (data) {
                    successMessage = data.data;
                });
            vm.getFromDB();

            scope.$apply();
            expect(successMessage).toEqual('fake structure');

        });

        it('DatabaseResource getFromDB: reject message', function () {
            var errorMessage;
            // Define a mocked uuid number
            scope.uuid = null;

            // Call the database resource
            DatabaseResource.getFromDB({ uuid: scope.uuid })
                .catch(function (data) {
                    errorMessage = data.error;
                });
            vm.getFromDB();

            scope.$apply();
            expect(errorMessage).toEqual('Cannot find a JSON structure with that UUID number');

        });

    });
})();
