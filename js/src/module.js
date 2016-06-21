(function(app) {
    'use strict';

    // only module related functionality goes here
    app.Extend('ModuleName', {
        // module functionality goes here

        // automatic module initialization
        // _init and init methods are mandatory
        _init: function() {
            console.log(this._name + ' is initialized');
            // initialization code goes here
        },
        init: function() {
            _.attempt( _.bind(this._init, this) );
        }
    });


} (window[NAMESPACE]));