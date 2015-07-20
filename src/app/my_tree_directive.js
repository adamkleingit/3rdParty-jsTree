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
	constructor($element, $http) {
		this._$element = $element;
		this._$http = $http;
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
		this._$http.post('children', obj)
			.then((response) => callback(response.data));
    }
}
