# Framework
A basic boilerplate for JS code

## Clone this repo into your project and use it as a boilerplate!

## The only dependancy this framework has is [lodash](https://lodash.com) - located inside the 'lib' folder.

# Installation
### Run:
    npm install

### Wait for all modules to be installed and then run:
    gulp watch-js
    
# Project structure
    Javascript
        - lib/ -> third party plugins/libraries/frameworks
        - src/ -> all project related functionalities. Each module/functionality should be developed in it's own file and exposed to the global scope for others to use

### Application namespace definition
``` javascript
    // open _core.js and specify a name for your namespace:

    ...
    const NAMESPACE = 'Application';
    ...
```

### JS Module definition
``` javascript
(function(app) { // we name the injected namespace 'app' for easier use
    'use strict';

    // only module related functionality goes here
    // each module must be given unique name which will be transformed to camelCase internally
    // if you name the module 'module-name', you will be able to access it only by using moduleName
    
    // this will add 'ModuleName' to the global namespace (Application)
    app.Extend('ModuleName', {
        // module functionality goes here

        // automatic module initialization
        // _init and init methods are mandatory
        _init: function() {
            // each {} module will be automatically assigned a ._name property where the name of module will be saved
            console.log(this._name + ' is initialized');
            // initialization code goes here
        },
        init: function() {
            _.attempt( _.bind(this._init, this) );
        }
    });
    
    app.Extend('FunctionName', function() {
        // function code goes here
        // this can be instantiated
    });
    
} (Application)); // always inject the global namespace
```

### JS Module usage
``` javascript
$(function() {
    'use strict';
    
    // initialize an object module
    Application.ModuleName.moduleInitializationMethod;
    
    // fun a function
    Application.FunctionName();
});
```