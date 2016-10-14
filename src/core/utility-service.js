(function () {
    'use strict';

    angular
        .module('LearningPlatformApplication')
        .service('UtilityService', ['$filter', function ($filter) {
            this.TrimCDataForView = function (code) {
                return code.toString().trim().replace(/\s\s+/g, '\n').replace(/\/tb/g, '   ');
            };

            this.GetTitleByLevel = function (scope, chapterList, level) {
                for (var key in chapterList) {
                    if (chapterList[key].level.toLowerCase() === level) {
                        scope.titleList.push(chapterList[key].title);
                    }
                    if (chapterList[key].title === scope.titleList[0]) {
                        scope.chapter = chapterList[key];
                    }
                }
            };

            this.AddCodeValue = function (scope) {
                scope.code.html = this.TrimCDataForView(scope.chapter.code.htmlcode);
                scope.code.script = this.TrimCDataForView(scope.chapter.code.scriptcode);
                scope.code.style = this.TrimCDataForView(scope.chapter.code.stylecode);
            };

            this.CopyCodeValue = function (scope) {
                scope.htmlCodeCopy = angular.copy(scope.code.html);
                scope.scriptCodeCopy = angular.copy(scope.code.script);
                scope.styleCodeCopy = angular.copy(scope.code.style);
            };

            this.GetChapter = function (scope, lesson, chapters) {
                for (var i = 0; i < chapters.length; i++) {
                    if (chapters[i].title == lesson) {
                        scope.chapter = chapters[i];

                        this.AddCodeValue(scope);
                        this.CopyCodeValue(scope);

                        document.getElementById('iframeWrapper').innerHTML = '';
                    }
                }
            };

            this.showHideLesson = function (lesson, list) {
                for (var key in list) {
                    if (lesson != $filter('spaceToDash')(list[key].title)) {
                        list[key].hide = 'hide-lesson';
                    } else {
                        list[key].hide = 'show-lesson';
                    }
                }
            };

            this.WriteCodeToIframe = function (scope, dependencyLink) {
                var text = scope.code.html;
                var scriptText = scope.code.script;
                var styleText = scope.code.style;

                var ifr = document.createElement('iframe');

                ifr.setAttribute('name', 'frame1');
                ifr.setAttribute('frameborder', '0');
                ifr.setAttribute('id', 'iframeResult');
                document.getElementById('iframeWrapper').innerHTML = '';
                document.getElementById('iframeWrapper').appendChild(ifr);

                var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;

                ifrw.document.open();
                ifrw.document.write(text);
                ifrw.document.write('<style>' + styleText + '<\/style>');

                angular.forEach(dependencyLink, function (value) {
                    ifrw.document.write('<script type="text/javascript" src="' + value + '"><\/scr' + 'ipt>');
                });

                ifrw.document.write('<script type="text/javascript">' + scriptText + '<\/scr' + 'ipt>');
                ifrw.document.close();
            };
        }]);
})();