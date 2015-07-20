export default class FilesDataService {
	constructor($http) {
		this._$http = $http;
		this._root = {};
		this._flatNodesMap = {
			'#': this._root
		};
	}

	getRoot() {
		return this._root;
	}

	getChildrenOf(id) {
		let parent = this._flatNodesMap[id];
		return this._$http.post('children', {id: id})
			.then((response) => {
				parent.children = response.data.map((child) => {
					child.parent = parent;
					this._flatNodesMap[child.id] = child;
					return child;
				});
				return parent.children;
			});
	}
}