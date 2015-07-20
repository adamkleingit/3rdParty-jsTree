import $ from 'jquery';
import treeData from './data.json'

export default function MyTreeDirective() {
	return {
		restrict: 'A',
		bindToController: true,
		controller: MyTreeDirectiveController,
		controllerAs: 'MyTree'
	}
}

class MyTreeDirectiveController {
	constructor($element) {
		this._$element = $element;
		this._initTree();
	}

	_initTree() {
		this.jstree = $(this._$element).jstree({
			core: {
				data: treeData
			}
		});
	}
}
