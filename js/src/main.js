;(function($, app) {

    $.call(function() {
        // Simple initializiation logic:
        // All Childs of 'app' should be added via .Extend('name', {});
        // All extending objects must contain a method init() which will be called on document.ready
        // For examples: all scripts
        // Loop through all methods and attempt to initialize them,
        // this way we make sure we don't try to call scripts which aren't included
        _.each(app, function(method) {
            if(!_.isFunction(method) && _.isFunction(method.init)) {
                _.attempt(method.init.call(method));
            }
        });

    });


})(window.jQuery || new Function(), NAMESPACE || {});