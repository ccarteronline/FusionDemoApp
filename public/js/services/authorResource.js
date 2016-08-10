(function () {
    'use strict';
    angular
        .module('FusionApp')
        .factory('AuthorResource', function AuthorResourceFactory(UUIDResource) {
            var default_json_data = [
                {
                    name: 'John Doe',
                    uuid: UUIDResource.uuid(),
                    type: 'author',
                    courses: [
                        {
                            name: "Alebra 101",
                            uuid: UUIDResource.uuid(),
                            year: "2004"
                        },
                        {
                            name: "Earth Sciences",
                            uuid: UUIDResource.uuid(),
                            year: "2010"
                        }
                    ]
                },
                {
                    name: 'Elizabeth Jones',
                    uuid: UUIDResource.uuid(),
                    type: 'author',
                    courses: [
                        {
                            name: "Calculous",
                            uuid: UUIDResource.uuid(),
                            year: "2005"
                        },
                        {
                            name: "American History",
                            uuid: UUIDResource.uuid(),
                            year: "2007"
                        },
                        {
                            name: "World History",
                            uuid: UUIDResource.uuid(),
                            year: "2010"
                        }
                    ]
                },
                {
                    name: 'Michael McNelson',
                    uuid: UUIDResource.uuid(),
                    type: 'author',
                    courses: [
                        {
                            name: "Calculous",
                            uuid: UUIDResource.uuid(),
                            year: "2005"
                        }
                    ]
                }
            ];

            function getJSON() {
                return default_json_data;
            }

            function setJSON(newJson) {
                default_json_data = newJson;
            }

            return {
                getJSON: getJSON,
                setJSON: setJSON
            };
        });
})();
