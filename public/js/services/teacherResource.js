(function () {
    'use strict';
    angular
        .module('FusionApp')
        .factory('TeacherResource', function TeacherResourceFactory(UUIDResource) {
            var default_json_data = [
                {
                    name: 'Berry, Bunsen',
                    uuid: UUIDResource.uuid(),
                    type: 'teacher',
                    classes: [
                        {
                            name: 'Advanced Mathematics',
                            uuid: UUIDResource.uuid(),
                            teaching_courses: [
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Course 1'
                                },
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Course 2'
                                }
                            ],
                            students: [
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Bobby Thomas'
                                },
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Brittany Shoemaker'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Janice, Thompson',
                    uuid: UUIDResource.uuid(),
                    type: 'teacher',
                    classes: [
                        {
                            name: 'Advanced Physics',
                            uuid: UUIDResource.uuid(),
                            teaching_courses: [
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Course 3'
                                },
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Course 4'
                                },
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Course 5'
                                },
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Course 6'
                                }
                            ],
                            students: [
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Bobby Thomas'
                                },
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Brittany Shoemaker'
                                },
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Tommy Pickles'
                                },
                                {
                                    uuid: UUIDResource.uuid(),
                                    name: 'Chuckie Fenster'
                                }
                            ]
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
