(function () {
    'use strict';
    angular
        .module('FusionApp')
        .factory('AuthorResource', function AuthorResourceFactory() {
            var default_json_data = [
                {
                    name: 'John Doe',
                    uuid: '356520ce-57bd-450b-8d5e-34972f7715cf',
                    type: 'author',
                    courses: [
                        {
                            name: "Alebra 101",
                            uuid: 'gen',
                            year: "2004"
                        },
                        {
                            name: "Earth Sciences",
                            uuid: 'gen',
                            year: "2010"
                        }
                    ]
                },
                {
                    name: 'Elizabeth Jones',
                    uuid: '0b65e1ec-a6da-4103-9271-25428428daba',
                    type: 'author',
                    courses: [
                        {
                            name: "Calculous",
                            uuid: 'gen',
                            year: "2005"
                        },
                        {
                            name: "American History",
                            uuid: 'gen',
                            year: "2007"
                        },
                        {
                            name: "World History",
                            uuid: 'gen',
                            year: "2010"
                        }
                    ]
                },
                {
                    name: 'Michael McNelson',
                    uuid: '4a98dac1-1629-4c5a-b566-12ce3533ac5e',
                    type: 'author',
                    courses: [
                        {
                            name: "Calculous",
                            uuid: 'gen',
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
