import 'jquery';
import 'jstree';
import 'jstree/dist/themes/default/style.css';
import 'angular';
import 'angular-mocks';

import appStyle          from 'app/app.less';
import Main 	           from './main';
import MyTreeDirective 	 from './my_tree_directive';
import FilesDataService  from './files_data_service';

export default angular.module('app', ['ngMockE2E'])
  .controller('Main', Main)
  .directive('myTree', MyTreeDirective)
  .service('FilesDataService', FilesDataService)
  .run(($httpBackend) => {
    $httpBackend.whenPOST(/children/).respond(() => {
      let data = [
        {id: randomId(), text: 'file.html', size: 1000},
        {id: randomId(), text: 'file.html', size: 2000},
        {id: randomId(), text: 'folder', hasChild: true, size: 0}
      ];
      return [200, data];
    });
  })

function randomId() {
  return Math.floor(Math.random() * 10000000000)
}