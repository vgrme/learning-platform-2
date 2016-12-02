angular.module('demo.app.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('module/module.html','<div class="container-fluid bg-info">\r\n\t<div class="breadcrumb-wrapper">\r\n\t\t<ol class="breadcrumb bg-info">\r\n\t\t\t<li><a href="#/">Home</a></li>\r\n\t\t\t<li class="active">Modules</li>\r\n\t\t</ol>\r\n\t\t<a href="#/" class="btn btn-primary back-button">Back</a>\r\n\t</div>\r\n</div>\r\n\r\n<div class="content">\r\n\t<div class="container">\r\n\t\t<div id="moduleFilterContainer" ng-hide="module.showHideClass.moduleFilter">\r\n\t\t\t<label>Search</label>\r\n\t\t\t<input type="text" ng-model="module.moduleFilter.title" ng-change="module.updateSearch()">\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class="lessons-container">\r\n\t\t\t<div class="lesson-div bg-primary" ng-click="module.selectLesson(lesson.title | spaceToDash, $index+1)" ng-repeat="lesson in module.filtered = module.topicList | filter:module.moduleFilter | startFrom:(module.currentPage-1)*module.itemsPerPage | limitTo:module.itemsPerPage"\r\n\t\t\t\tng-class="lesson.hide">\r\n\t\t\t\t<i class="mdi mdi-{{lesson.icon}} icon-background"></i>\r\n\t\t\t\t<i class="mdi mdi-{{lesson.icon}} lesson-icon"></i>\r\n\t\t\t\t<span><h4>{{lesson.title}}</h4></span>\r\n\t\t\t</div>\r\n\t\t\t<button class="btn btn-primary level-back-button" ng-click="module.backToModules()" ng-class="module.showHideClass.levelBackButton">\r\n\t\t\t\t<i class="mdi mdi-arrow-left-bold mdi-36px"></i>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\t\t<ul uib-pagination class="pagination-sm module-pagination" ng-model="module.currentPage" ng-hide="module.hidePagination" total-items="module.totalItems" items-per-page="module.itemsPerPage"></ul>\r\n\r\n\t\t<div class="level-container">\r\n\t\t\t<a href="#module/{{module.lesson}}/beginner" ng-class="module.showHideClass.levelLinks">\r\n\t\t\t\t<h1>Beginner</h1>\r\n\t\t\t</a>\r\n\t\t\t<a href="#module/{{module.lesson}}/intermediate" ng-class="module.showHideClass.levelLinks">\r\n\t\t\t\t<h1>Intermediate</h1>\r\n\t\t\t</a>\r\n\t\t\t<a href="#module/{{module.lesson}}/advanced" ng-class="module.showHideClass.levelLinks">\r\n\t\t\t\t<h1>Advanced</h1>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n</div>');
$templateCache.put('lesson/lesson.html','<div class="container-fluid bg-info">\r\n\t<div class="breadcrumb-wrapper">\r\n\t\t<ol class="breadcrumb bg-info">\r\n\t\t\t<li><a href="#/">Home</a></li>\r\n\t\t\t<li><a href="#/module">Modules</a></li>\r\n\t\t\t<li class="active">{{lesson.breadcrumb.lesson | toTitleCase}}</li>\r\n\t\t</ol>\r\n\t\t<a href="#/module" class="btn btn-primary back-button">Back</a>\r\n\t</div>\r\n</div>\r\n\r\n<div class="content-main">\r\n\t<div class="container-fluid">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-md-2 col-sm-2 col" ng-hide="lesson.expandEditor">\r\n\t\t\t\t<div id="sideNav">\r\n\t\t\t\t\t<h4 ng-click="changeLevel = ! changeLevel">{{lesson.breadcrumb.level | toTitleCase}} <i class="mdi mdi-menu-down"></i></h4>\r\n\t\t\t\t\t<ul ng-show="changeLevel">\r\n\t\t\t\t\t\t<h5><span class="label label-primary">Select Level</span></h5>\r\n\t\t\t\t\t\t<li ng-hide="lesson.breadcrumb.level == \'beginner\'">\r\n\t\t\t\t\t\t\t<a href="#module/{{lesson.breadcrumb.lesson}}/beginner"><i class="mdi mdi-subdirectory-arrow-right"></i>Beginner</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li ng-hide="lesson.breadcrumb.level == \'intermediate\'">\r\n\t\t\t\t\t\t\t<a href="#module/{{lesson.breadcrumb.lesson}}/intermediate"><i class="mdi mdi-subdirectory-arrow-right"></i>Intermediate</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li ng-hide="lesson.breadcrumb.level == \'advanced\'">\r\n\t\t\t\t\t\t\t<a href="#module/{{lesson.breadcrumb.lesson}}/advanced"><i class="mdi mdi-subdirectory-arrow-right"></i>Advance</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<a href="" ng-repeat="title in lesson.titleList" ng-click="lesson.choiceFunction(title)">\r\n\t\t\t\t\t\t<i class="mdi mdi-menu-right"></i>{{title | toTitleCase}}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-md-5 col-sm-5 col" ng-hide="lesson.expandEditor">\r\n\t\t\t\t<div class="section" ng-show="lesson.chapter">\r\n\t\t\t\t\t<h1>{{lesson.chapter.title}}</h1>\r\n\t\t\t\t\t<chapter-content content="lesson.chapter.content"></chapter-content>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col" ng-class="{\'col-md-12 col-sm-12\' : lesson.expandEditor, \'col-md-5 col-sm-5\' : !lesson.expandEditor}">\r\n\t\t\t\t<div ng-class="{\'code-editor-col\' : lesson.expandEditor}">\r\n\t\t\t\t\t<uib-tabset active="active">\r\n\t\t\t\t\t\t<uib-tab index="0" heading="HTML" ng-click="">\r\n\t\t\t\t\t\t\t<section class="code-editor" ng-model="lesson.code.html" ng-change="lesson.updateHtmlCode(lesson.code.html)" ui-ace="{useWrapMode: true, showGutter: true, mode: \'html\'}"></section>\r\n\t\t\t\t\t\t</uib-tab>\r\n\t\t\t\t\t\t<uib-tab index="1" heading="Script" ng-click="">\r\n\t\t\t\t\t\t\t<section class="code-editor" ng-model="lesson.code.script" ng-change="lesson.updateScriptCode(lesson.code.script)" ui-ace="{useWrapMode: true, showGutter: true, mode: \'javascript\'}"></section>\r\n\t\t\t\t\t\t</uib-tab>\r\n\t\t\t\t\t\t<uib-tab index="2" heading="Style" ng-click="">\r\n\t\t\t\t\t\t\t<section class="code-editor" ng-model="lesson.code.style" ng-change="lesson.updateStyleCode(lesson.code.style)" ui-ace="{useWrapMode: true, showGutter: true, mode: \'css\'}"></section>\r\n\t\t\t\t\t\t</uib-tab>\r\n\t\t\t\t\t</uib-tabset>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div ng-class="{\'code-editor-col\' : lesson.expandEditor}">\r\n\t\t\t\t\t<button class="btn btn-success code-buttons" ng-click="lesson.submitCode()">Try It</button>\r\n\t\t\t\t\t<button class="btn btn-warning code-buttons" ng-click="lesson.resetCode()">Reset</button>\r\n\t\t\t\t\t<button class="btn btn-info code-buttons" ng-click="lesson.showExample()">Example</button>\r\n\t\t\t\t\t<button class="btn btn-primary pull-right code-buttons" ng-click="lesson.expandEditor = !lesson.expandEditor">\r\n\t\t\t\t\t\t<i class="mdi mdi-arrow-expand" ng-show="!lesson.expandEditor"></i>\r\n\t\t\t\t\t\t<i class="mdi mdi-arrow-compress" ng-show="lesson.expandEditor"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<web-sandbox id="iframeWrapper" ws-id="iframeResult" code="lesson.wscode"></web-sandbox>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>');}]);
//# sourceMappingURL=demo.app.templates.js.map
