(function() {
    'use strict';

    const VERSION = 1;
    const NAMESPACE = window.NAMESPACE = 'Application';

    // define global project namespace
    window[NAMESPACE] = {
        _version: VERSION,
        Extend: function(name, fn, force) {
            name = name.charAt(0).toUpperCase() + (_.camelCase(name)).slice(1);

            if(this.hasOwnProperty(name) && !force) {
                return console.warn('Trying to create Method "' + name + '" which already exists. Bailing... \n If you\'d like to extend and existing object use Extend(name, fn, true).');
            }

            if(this.hasOwnProperty(name) && force) {
                if(_.isFunction(fn)) {
                    return this[name] = _.bind(fn, this[name]);
                }
                return this[name] = _.assignIn(this[name], fn);
            }

            if(_.isFunction(fn)) {
                return this[name] = _.bind(fn, this[name]);
            }

            fn._name = name;
            return this[name] = fn;
        }
    };

} ());