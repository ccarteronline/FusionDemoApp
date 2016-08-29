(function() {
    'use strict';
    var Page = require('astrolabe').Page;

    module.exports = Page.create({
        navigationItem: {
            value: function (i) {
                return element.all(by.css('[ng-click="vm.navigateTo(btn, false)"]')).get(i);
            }
        },
        itemInSidebar: {
            value: function (i) {
                return element.all(by.css('[ng-click="showTab(item.type, item.uuid)"]')).get(i);
            }
        },
        openSideBarAt: {
            value: function (i) {
                this.navigationItem(i).click();
            }
        },
        authorCourseDeleteBtn: {
            value: function (i) {
                return element.all(by.css('[ng-click="vm.removeCourse($index)"]')).get(i);
            }
        },
        teacherCourseDeleteBtn: {
            value: function (i) {
                return element.all(by.css('[ng-click="vm.removeCourse($parent.$index, $index)"]'));
            }
        }
    });
}());
