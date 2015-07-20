import $ from 'jquery';

export default function MyTreeDirective() {
	return {
		restrict: 'A',
		bindToController: true,
		controller: MyTreeDirectiveController,
		controllerAs: 'MyTree'
	}
}

class MyTreeDirectiveController {
	constructor($element, $http, FilesDataService) {
		this._$element = $element;
		this._$http = $http;
		this._FilesDataService = FilesDataService;
		this._initTree();
	}

	_initTree() {
		this.jstree = $(this._$element).jstree({
			core: {
				data: this._getData.bind(this)
			}
		});
	}
	_getData (obj, callback) {
		this._FilesDataService.getChildrenOf(obj.id)
			.then((children) => {
				let data = this._transformData(children);
				callback(data);
			});
    }

	_transformData(children) {
    	return children.map((node) => {
			let jsTreeNode = {
				text: node.text,
				children: node.hasChild,
				id: node.id
			};
			node.jsTreeNode = jsTreeNode;
			return jsTreeNode;
		});
	}
}
