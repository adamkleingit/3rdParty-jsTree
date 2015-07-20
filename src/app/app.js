import 'jquery';
import 'jstree';
import 'jstree/dist/themes/default/style.css';
import 'angular';
import 'angular-mocks';

import appStyle         from 'app/app.less';
import Main 	          from './main';
import MyTreeDirective 	from './my_tree_directive';

export default angular.module('app', ['ngMockE2E'])
  .controller('Main', Main)
  .directive('myTree', MyTreeDirective)
  .run(($httpBackend) => {
    $httpBackend.whenPOST(/children/).respond(['file', {text: 'folder', children: true}]);
  })