(function () {
    'use strict';
    FusionApp
        .factory('TeacherResource', function TeacherResourceFactory() {
            var default_json_data = [
                {
                    name: 'Berry, Bunsen',
                    uuid: '2b043f65-7aec-43b2-bec7-8b47743eb321',
                    type: 'teacher',
                    classes: [
                        {
                            name: 'Advanced Mathematics',
                            uuid: 'eab09941-29b5-49dd-9cb3-4ba157b5c17e',
                            teaching_courses: [
                                {
                                    uuid: 'gen',
                                    name: 'Course 1'
                                },
                                {
                                    uuid: 'gen',
                                    name: 'Course 2'
                                }
                            ],
                            students: [
                                {
                                    uuid: 'gen',
                                    name: 'Bobby Thomas'
                                },
                                {
                                    uuid: 'gen',
                                    name: 'Brittany Shoemaker'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Janice, Thompson',
                    uuid: 'e3e66934-2cba-48dd-a973-6273900eeb5e',
                    type: 'teacher',
                    classes: [
                        {
                            name: 'Advanced Physics',
                            uuid: '45477bfd-cabc-47ea-b090-c3449da1e331',
                            teaching_courses: [
                                {
                                    uuid: 'gen',
                                    name: 'Course 3'
                                },
                                {
                                    uuid: 'gen',
                                    name: 'Course 4'
                                },
                                {
                                    uuid: 'gen',
                                    name: 'Course 5'
                                },
                                {
                                    uuid: 'gen',
                                    name: 'Course 6'
                                }
                            ],
                            students: [
                                {
                                    uuid: 'gen',
                                    name: 'Bobby Thomas'
                                },
                                {
                                    uuid: 'gen',
                                    name: 'Brittany Shoemaker'
                                },
                                {
                                    uuid: 'gen',
                                    name: 'Tommy Pickles'
                                },
                                {
                                    uuid: 'gen',
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
