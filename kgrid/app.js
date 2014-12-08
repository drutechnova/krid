function KridSample(parameters) {
    var self = this;


    self.data = ko.mapping.fromJS(data);

    var kridOptions = {
        columns: [
                    {
                        fieldName: 'id',
                        displayText: 'ID'
                    },
                    {
                        fieldName: 'name',
                        displayText: 'Name'
                    },
                    {
                        fieldName: 'price',
                        displayText: 'Price'
                    }

        ],
        data: self.data,
        dataUrl: '/api/',
        doGetAll: true,
        sortKeyIndex: 0,
        selectedItem: ko.observable(),
        selectedItems: ko.observableArray(),
        isSearchable: false,
        searchPlaceHolder: 'Search',
        multiSelect: false,
        enabled: true,
        modalTitle: 'Edit items',
        modalContent: 'modalContent',
    };
    self.kridObj = new krid(kridOptions);


}


$(function () {
    ko.applyBindings(new KridSample());
    setTimeout(function() {
        $("table").colResizable({
            liveDrag: true,
            gripInnerHtml: "<div class='grip'></div>",
            draggingClass: "dragging",
        });
    }, 1500);
});

var data = [
    {
        "id": 21,
        "name": "Item 21",
        "price": "$21",
        "status": 'warning'
    },
    {
        "id": 0,
        "name": "Item 0",
        "price": "$0",
        "status": "danger",
    },
    {
        "id": 1,
        "name": "Item 1",
        "price": "$1"
    },
    //{
    //    "id": 2,
    //    "name": "Item 2",
    //    "price": "$2"
    //},
    //{
    //    "id": 3,
    //    "name": "Item 3",
    //    "price": "$3"
    //},
    //{
    //    "id": 4,
    //    "name": "Item 4",
    //    "price": "$4"
    //},
    //{
    //    "id": 5,
    //    "name": "Item 5",
    //    "price": "$5"
    //},
    //{
    //    "id": 6,
    //    "name": "Item 6",
    //    "price": "$6"
    //},
    //{
    //    "id": 7,
    //    "name": "Item 7",
    //    "price": "$7"
    //},
    //{
    //    "id": 8,
    //    "name": "Item 8",
    //    "price": "$8"
    //},
    //{
    //    "id": 9,
    //    "name": "Item 9",
    //    "price": "$9"
    //},
    //{
    //    "id": 10,
    //    "name": "Item 10",
    //    "price": "$10"
    //},
    //{
    //    "id": 11,
    //    "name": "Item 11",
    //    "price": "$11"
    //},
    //{
    //    "id": 12,
    //    "name": "Item 12",
    //    "price": "$12"
    //},
    //{
    //    "id": 13,
    //    "name": "Item 13",
    //    "price": "$13"
    //},
    //{
    //    "id": 14,
    //    "name": "Item 14",
    //    "price": "$14"
    //},
    //{
    //    "id": 15,
    //    "name": "Item 15",
    //    "price": "$15"
    //},
    //{
    //    "id": 16,
    //    "name": "Item 16",
    //    "price": "$16"
    //},
    //{
    //    "id": 17,
    //    "name": "Item 17",
    //    "price": "$17"
    //},
    //{
    //    "id": 18,
    //    "name": "Item 18",
    //    "price": "$18"
    //},
    //{
    //    "id": 19,
    //    "name": "Item 19",
    //    "price": "$19"
    //},
    //{
    //    "id": 20,
    //    "name": "Item 20",
    //    "price": "$20"
    //}
]