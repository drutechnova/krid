function krid(options) {
    var self = this;
    var defaultOptions = {
        columns: [],
        data: [],
        dataUrl: '/api/',
        doGetAll: true,
        sortKeyIndex: 0,
        selectedItem: ko.observable(),
        selectedItems: ko.observableArray(),
        isSearchable: false,
        searchPlaceHolder: 'Search',
        multiSelect: false,
        enabled: true,
        modalTitle: '',
        modalContent: '',
        pagingOptions: {

        }
    };
    if (typeof options == 'object') {
        options = $.extend(defaultOptions, options);
    } else {
        options = defaultOptions;
    }


    //variables 
    self.columns = options.columns;
    self.data = options.data;
    self.sortKeyIndex = options.sortKeyIndex;
    self.selectedItem = options.selectedItem;
    self.originalSelectedItem = ko.observable();
    self.oldVal = ko.observable();
    self.selectedItems = options.selectedItems;
    self.modalContent = options.modalContent;
    self.modalTitle = options.modalTitle;
    self.statuses = ['info', 'active', 'success', 'warning', 'active', 'danger'];

    //setting up stuff
    ko.utils.arrayForEach(self.data(), function (item) {
        //item.status = ko.observable();
        item.isSelected = ko.observable();
    });

    //column css
    ko.utils.arrayForEach(self.columns, function (item) {
        item.sortKeyCss = ko.observable();
    });


    //self.originalSelectedItem = self.ko.isObservable(selectedItem) ? selectedItem : self.ko.observable(selectedItem);
    //self.selectedItem = self.ko.observable(self.komapping.fromJS(self.komapping.toJS(selectedItem))); //Fyi - this removes any extenders added to this observable

    //functions
    self.sort = function (data, event) {
        sortByKey(self.data, data.fieldName);
        ko.utils.arrayForEach(self.columns, function (item) {
            item.sortKeyCss('');
        });
        data.sortKeyCss('fa fa-fw fa-sort-asc');
    };
    self.rowClicked = function (data, event) {
        if (options.multiSelect) {
            console.log('row click');
        }
    };
    self.rowDoubleClicked = function (data, event) {
        if (!options.multiSelect) {
            console.log('row double click');
            ko.utils.arrayForEach(self.data(), function (item) {
                item.isSelected('');
            });
            data.isSelected(self.statuses[0]);

            self.originalSelectedItem(ko.isObservable(data) ? data : ko.observable(data));
            self.oldVal = ko.mapping.toJS(data);
            self.selectedItem(ko.observable(ko.mapping.fromJS(ko.mapping.toJS(data))));
            $('#dataModal').modal('show');
        }
    };
    self.discard = function () {
        console.log('discard');
        $('#dataModal').modal('hide');
    };

    setTimeout(function () {
        $('#dataModal').on('hidden.bs.modal', function (e) {
            ko.utils.arrayForEach(self.data(), function (item) {
                item.isSelected('');
            });
        });
    }, 1500);


    setTimeout(function () {
        var temp = ko.observableArray(ko.mapping.fromJS(data2)());
        //setting up stuff
        ko.utils.arrayForEach(temp(), function (item) {
            //item.status = ko.observable();
            item.isSelected = ko.observable();
        });
        self.data(temp());
      

    }, 2000);
}
function naturalSorter(as, bs) {
    var a, b, a1, b1, i = 0, n, L,
    rx = /(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g;
    if (as === bs) return 0;
    if (typeof as == "string") {
        a = as.toLowerCase().match(rx);
        b = bs.toLowerCase().match(rx);
    }


    L = a.length;
    while (i < L) {
        if (!b[i]) return 1;
        a1 = a[i],
        b1 = b[i++];
        if (a1 !== b1) {
            n = a1 - b1;
            if (!isNaN(n)) return n;
            return a1 > b1 ? 1 : -1;
        }
    }
    return b[i] ? -1 : 0;
}
function sortByKey(array, key) {
    try {
        try {
            return array.sort(function (o1, o2) {
                return naturalSorter(o1[key](), o2[key]());
            });

        } catch (e) {
            return array.sort(function(a, b) {
                var x = a[key]();
                var y = b[key]();

                if (typeof x == "string") {
                    x = x.toLowerCase();
                    y = y.toLowerCase();
                }

                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
        //);
    } catch (e) {

    }
}


var data2 = [
	{
	    "id": 298652,
	    "name": "Cameron",
	    "price": "$32.60"
	},
	{
	    "id": 351501,
	    "name": "Seth",
	    "price": "$39.77"
	},
	{
	    "id": 760985,
	    "name": "Justin",
	    "price": "$32.64"
	},
	{
	    "id": 623942,
	    "name": "Gareth",
	    "price": "$43.73"
	},
	{
	    "id": 416231,
	    "name": "Cole",
	    "price": "$86.15"
	},
	{
	    "id": 62565,
	    "name": "Murphy",
	    "price": "$69.23"
	},
	{
	    "id": 382351,
	    "name": "Dexter",
	    "price": "$75.40"
	},
	{
	    "id": 197092,
	    "name": "Damian",
	    "price": "$2.71"
	},
	{
	    "id": 436388,
	    "name": "Jamal",
	    "price": "$64.12"
	},
	{
	    "id": 837817,
	    "name": "Walter",
	    "price": "$52.32"
	},
	{
	    "id": 394956,
	    "name": "Noble",
	    "price": "$32.48"
	},
	{
	    "id": 818303,
	    "name": "Kenneth",
	    "price": "$48.55"
	},
	{
	    "id": 134863,
	    "name": "Curran",
	    "price": "$90.13"
	},
	{
	    "id": 828561,
	    "name": "Erasmus",
	    "price": "$70.15"
	},
	{
	    "id": 174259,
	    "name": "Jesse",
	    "price": "$99.53"
	},
	{
	    "id": 244851,
	    "name": "Chadwick",
	    "price": "$5.11"
	},
	{
	    "id": 361508,
	    "name": "Len",
	    "price": "$47.57"
	},
	{
	    "id": 356664,
	    "name": "Merrill",
	    "price": "$89.22"
	},
	{
	    "id": 299889,
	    "name": "Clarke",
	    "price": "$64.25"
	},
	{
	    "id": 634944,
	    "name": "Wang",
	    "price": "$67.08"
	},
	{
	    "id": 777291,
	    "name": "Erasmus",
	    "price": "$18.31"
	},
	{
	    "id": 602060,
	    "name": "Clayton",
	    "price": "$76.15"
	},
	{
	    "id": 138922,
	    "name": "Austin",
	    "price": "$54.18"
	},
	{
	    "id": 613973,
	    "name": "Dylan",
	    "price": "$93.71"
	},
	{
	    "id": 191524,
	    "name": "Bert",
	    "price": "$44.51"
	},
	{
	    "id": 277209,
	    "name": "Deacon",
	    "price": "$37.24"
	},
	{
	    "id": 566513,
	    "name": "Cooper",
	    "price": "$28.55"
	},
	{
	    "id": 399284,
	    "name": "Uriel",
	    "price": "$33.16"
	},
	{
	    "id": 416901,
	    "name": "Abbot",
	    "price": "$28.38"
	},
	{
	    "id": 495991,
	    "name": "Kieran",
	    "price": "$78.25"
	},
	{
	    "id": 274341,
	    "name": "Jacob",
	    "price": "$36.64"
	},
	{
	    "id": 729075,
	    "name": "Bruno",
	    "price": "$96.07"
	},
	{
	    "id": 477754,
	    "name": "Tarik",
	    "price": "$59.06"
	},
	{
	    "id": 871240,
	    "name": "Caldwell",
	    "price": "$89.84"
	},
	{
	    "id": 427,
	    "name": "Bernard",
	    "price": "$78.32"
	},
	{
	    "id": 414715,
	    "name": "Randall",
	    "price": "$37.75"
	},
	{
	    "id": 397476,
	    "name": "Dillon",
	    "price": "$27.30"
	},
	{
	    "id": 582728,
	    "name": "Connor",
	    "price": "$41.46"
	},
	{
	    "id": 819576,
	    "name": "Mannix",
	    "price": "$92.80"
	},
	{
	    "id": 790373,
	    "name": "Xanthus",
	    "price": "$26.88"
	},
	{
	    "id": 542544,
	    "name": "Denton",
	    "price": "$11.29"
	},
	{
	    "id": 841209,
	    "name": "Thane",
	    "price": "$87.55"
	},
	{
	    "id": 573220,
	    "name": "Kibo",
	    "price": "$5.50"
	},
	{
	    "id": 865566,
	    "name": "Dylan",
	    "price": "$57.99"
	},
	{
	    "id": 891371,
	    "name": "Kaseem",
	    "price": "$47.06"
	},
	{
	    "id": 338178,
	    "name": "Julian",
	    "price": "$3.82"
	},
	{
	    "id": 395999,
	    "name": "Dante",
	    "price": "$55.33"
	},
	{
	    "id": 210560,
	    "name": "Macaulay",
	    "price": "$80.54"
	},
	{
	    "id": 331622,
	    "name": "Brock",
	    "price": "$46.89"
	},
	{
	    "id": 512309,
	    "name": "Conan",
	    "price": "$42.89"
	},
	{
	    "id": 272421,
	    "name": "Bevis",
	    "price": "$63.37"
	},
	{
	    "id": 592265,
	    "name": "Amos",
	    "price": "$59.10"
	},
	{
	    "id": 288047,
	    "name": "Louis",
	    "price": "$7.48"
	},
	{
	    "id": 273463,
	    "name": "Uriel",
	    "price": "$51.63"
	},
	{
	    "id": 800584,
	    "name": "Xenos",
	    "price": "$62.17"
	},
	{
	    "id": 120192,
	    "name": "Philip",
	    "price": "$44.52"
	},
	{
	    "id": 372041,
	    "name": "Ali",
	    "price": "$84.04"
	},
	{
	    "id": 484929,
	    "name": "Aidan",
	    "price": "$72.00"
	},
	{
	    "id": 264413,
	    "name": "Thor",
	    "price": "$6.23"
	},
	{
	    "id": 62472,
	    "name": "Cameron",
	    "price": "$47.77"
	},
	{
	    "id": 347713,
	    "name": "Brendan",
	    "price": "$51.56"
	},
	{
	    "id": 463689,
	    "name": "Arden",
	    "price": "$45.50"
	},
	{
	    "id": 362224,
	    "name": "Steven",
	    "price": "$29.29"
	},
	{
	    "id": 135243,
	    "name": "Devin",
	    "price": "$35.67"
	},
	{
	    "id": 697398,
	    "name": "Moses",
	    "price": "$88.02"
	},
	{
	    "id": 753972,
	    "name": "Samuel",
	    "price": "$57.53"
	},
	{
	    "id": 131064,
	    "name": "Chadwick",
	    "price": "$3.82"
	},
	{
	    "id": 169036,
	    "name": "Jack",
	    "price": "$95.75"
	},
	{
	    "id": 858747,
	    "name": "Adam",
	    "price": "$86.11"
	},
	{
	    "id": 402844,
	    "name": "Mason",
	    "price": "$72.66"
	},
	{
	    "id": 521383,
	    "name": "Keith",
	    "price": "$34.23"
	},
	{
	    "id": 115932,
	    "name": "Aristotle",
	    "price": "$76.33"
	},
	{
	    "id": 670692,
	    "name": "Matthew",
	    "price": "$19.21"
	},
	{
	    "id": 352399,
	    "name": "Ignatius",
	    "price": "$87.38"
	},
	{
	    "id": 517183,
	    "name": "Aladdin",
	    "price": "$29.02"
	},
	{
	    "id": 64962,
	    "name": "Porter",
	    "price": "$78.51"
	},
	{
	    "id": 8911,
	    "name": "Armando",
	    "price": "$78.83"
	},
	{
	    "id": 193454,
	    "name": "Howard",
	    "price": "$22.74"
	},
	{
	    "id": 787046,
	    "name": "Todd",
	    "price": "$5.30"
	},
	{
	    "id": 281234,
	    "name": "Gavin",
	    "price": "$20.31"
	},
	{
	    "id": 375659,
	    "name": "Hall",
	    "price": "$23.69"
	},
	{
	    "id": 512262,
	    "name": "Valentine",
	    "price": "$56.03"
	},
	{
	    "id": 257035,
	    "name": "Nicholas",
	    "price": "$5.39"
	},
	{
	    "id": 858573,
	    "name": "Russell",
	    "price": "$12.82"
	},
	{
	    "id": 168642,
	    "name": "Merritt",
	    "price": "$11.36"
	},
	{
	    "id": 807532,
	    "name": "Brett",
	    "price": "$83.04"
	},
	{
	    "id": 184703,
	    "name": "Charles",
	    "price": "$26.41"
	},
	{
	    "id": 773585,
	    "name": "Luke",
	    "price": "$25.86"
	},
	{
	    "id": 372004,
	    "name": "Jakeem",
	    "price": "$26.30"
	},
	{
	    "id": 665026,
	    "name": "Jack",
	    "price": "$63.97"
	},
	{
	    "id": 156949,
	    "name": "Beck",
	    "price": "$27.18"
	},
	{
	    "id": 615292,
	    "name": "Cedric",
	    "price": "$6.22"
	},
	{
	    "id": 140609,
	    "name": "Phelan",
	    "price": "$12.06"
	},
	{
	    "id": 883633,
	    "name": "Lester",
	    "price": "$64.09"
	},
	{
	    "id": 660460,
	    "name": "Linus",
	    "price": "$80.61"
	},
	{
	    "id": 378821,
	    "name": "Wesley",
	    "price": "$9.47"
	},
	{
	    "id": 158142,
	    "name": "Dalton",
	    "price": "$55.17"
	},
	{
	    "id": 778937,
	    "name": "Emery",
	    "price": "$63.04"
	},
	{
	    "id": 317427,
	    "name": "Rajah",
	    "price": "$46.66"
	},
	{
	    "id": 222847,
	    "name": "Michael",
	    "price": "$62.02"
	}
]