'use strict';

(function () {
    'use strict';

    var VERSION = 1;
    var NAMESPACE = window.NAMESPACE = 'Application';

    // define global project namespace
    window[NAMESPACE] = {
        _version: VERSION,
        Extend: function Extend(name, fn, force) {
            name = name.charAt(0).toUpperCase() + _.camelCase(name).slice(1);

            if (this.hasOwnProperty(name) && !force) {
                return console.warn('Trying to create Method "' + name + '" which already exists. Bailing... \n If you\'d like to extend and existing object use Extend(name, fn, true).');
            }

            if (this.hasOwnProperty(name) && force) {
                if (_.isFunction(fn)) {
                    return this[name] = _.bind(fn, this[name]);
                }
                return this[name] = _.assignIn(this[name], fn);
            }

            if (_.isFunction(fn)) {
                return this[name] = _.bind(fn, this[name]);
            }

            fn._name = name;
            return this[name] = fn;
        }
    };
})();
"use strict";

;(function ($, app) {

    $.call(function () {
        // Simple initializiation logic:
        // All Childs of 'app' should be added via .Extend('name', {});
        // All extending objects must contain a method init() which will be called on document.ready
        // For examples: all scripts
        // Loop through all methods and attempt to initialize them,
        // this way we make sure we don't try to call scripts which aren't included
        _.each(app, function (method) {
            if (!_.isFunction(method) && _.isFunction(method.init)) {
                _.attempt(method.init.call(method));
            }
        });
    });
})(window.jQuery || new Function(), NAMESPACE || {});
'use strict';

(function (app) {
    'use strict';

    // only module related functionality goes here

    app.Extend('ModuleName', {
        // module functionality goes here

        // automatic module initialization
        // _init and init methods are mandatory
        _init: function _init() {
            console.log(this._name + ' is initialized');
            // initialization code goes here
        },
        init: function init() {
            _.attempt(_.bind(this._init, this));
        }
    });
})(window[NAMESPACE]);
//# sourceMappingURL=scripts.js.map
