class File {
	constructor(data) {
		// Default values:
		data = angular.extend({
			children: [],
			size: 0
		}, data);
		// Copy to this:
		angular.copy(data, this);
	}

	getTotalSize() {
		return this.size +
			this.children.reduce((size, child) => size + child.getTotalSize(), 0);
	}
}

export default class FilesDataService {
	constructor($http) {
		this._$http = $http;
		this._root = new File({});
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
					child = new File(child);
					child.parent = parent;
					this._flatNodesMap[child.id] = child;
					return child;
				});
				return parent.children;
			});
	}
}