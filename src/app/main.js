import treeData from './data.json'
export default class Main {
	constructor() {
		this.treeData = treeData;
		this.treeConfig = {
		    core : {
		        multiple : false,
		        animation: true
		    }
		};
	}
}

