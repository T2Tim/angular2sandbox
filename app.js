var hapiWrapper = require('./server/HttpServer/HapiWrapper');
var path = require('path');

//Define our application
var App = {
    webServer: null,
    appDir: path.resolve(__dirname),
    init: function (){
        //start up our interface(s)
        hapiWrapper.hapiInterface(path.join(App.appDir, 'web') ,function(err, webInterface){
            if(err){
                console.log('(App.Init) Interface Error: ' + err.message || err);
            }
            //hold a reference to our web interface
            App.webServer = webInterface;
        });
    }
};

//we start up our app
try {
    App.init();
}
catch (ex){
    console.log('(App.Startup) Startup Exception: ' + ex.message || ex)
}
