import $ from 'jquery';
import treeData from './data.json'

export default function MyTreeDirective() {
	return {
		restrict: 'A',
		bindToController: true,
		controller: MyTreeDirectiveController,
		controllerAs: 'MyTree',
		scope: {
			'treeOptions': '=myTree'
		},
		link: MyTreeLink
	}
}

class MyTreeDirectiveController {
	constructor($element) {
		this._$element = $element;
	}

	_initTree() {
		this.jstree = $(this._$element).jstree({
			core: {
				data: treeData
			}
		});
	}
}

function MyTreeLink($scope, $element, attrs, MyTree) {
	MyTree._initTree();
}