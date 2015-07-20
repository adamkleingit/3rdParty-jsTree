import 'jquery';
import 'jstree';
import 'jstree/dist/themes/default/style.css';
import 'angular';

import appStyle         from 'app/app.less';
import Main 	          from './main';
import MyTreeDirective 	from './my_tree_directive';

export default angular.module('app', [])
  .controller('Main', Main)
  .directive('myTree', MyTreeDirective)
