import cellTemplates from './cell_templates'
const DEFAULTS = {
	enableFiltering: true,
 	enablePaginationControls: false,
    paginationPageSize: 8
};

class MyGrid {
	constructor(opts) {
		this._setDefaults(opts);
		this._registerEvents();
	}

	_setDefaults(opts) {
		opts = angular.extend(DEFAULTS, opts);
		angular.extend(this, opts)
	}

	_registerEvents() {
		this.onRegisterApi = function (gridApi) {
			this.gridApi = gridApi;
		}
	}

	setData(data) {
		this.data = data;
		return this;
	}

	setColumns(columns) {
		columns.push({
			name: ' ',
			width: '5%',
			enableFiltering: false,
			enableSorting: false,
			enableColumnMenu: false,
			cellTemplate: 'delete'
		});
		columns.forEach((col) => {
			if (col.cellTemplate && cellTemplates[col.cellTemplate]) {
				col.cellTemplate = cellTemplates[col.cellTemplate];
			}
		});
		this.columnDefs = columns;
		return this;		
	}
}

export default function MyGridFactory() {
	return MyGrid;
}