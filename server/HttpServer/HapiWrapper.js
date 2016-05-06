var hapi = require('hapi');
var eventBus = require('./../eventBus').EventBus();
var Inert = require('inert');


/**
 * Module uses the hapi web server as an interface into the application.
 * This module should only be used once.
 * Once an request is received and validated - this interface should fire an
 * event which will be handled in the application layer. All events fired from here are
 * required to have a callback that can be called when complete. Sample Event Obj...
 *
 * Event Obj = {
 *                  action: {} //Think action code
 *                  method: {} //Optional http method
 *                  payload: any parameters / data passed in the request
 *                  Callback: function(err, data)
 *             }
 *
 *  The event that is fired, along with the action should be enough to route the request
 *  Through the application.
 *
 */

module.exports.hapiInterface = function(resourceDir, pCallback){
    var server = new hapi.Server();
    server.connection({
        port: 8080
    });

    //we register our plugin
    server.register(Inert, function () {});

    /************************ Catch all not found route ****************************/
    server.route({
        method: '*',
        path: '/{p*}', // catch-all path
        handler: function (req, res) {
            console.log('(Server.NotFound) Invalid Path: ' + req.path + ' Method: ' + req.method + ' received payload: ' + JSON.stringify(req.payload) + ' from host: ' + req.info.remoteAddress);
            res('Page not found').code(404);
        }
    });

    /***************************** Traditional Web Server Routers ( **********************/
    server.route({
        method: 'GET',
        path: '/',
        config: {
            security: true
        },
        handler: function (req, res) {
            console.log("Returning index.html");
            return res.file(resourceDir + '/html/' +
                'index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/styles/{cssFile}',
        config: {
            security: true
        },
        handler: function (req, res) {
            console.log("Returning style sheet: " + req.params.cssFile);
            return res.file(resourceDir + '/styles/' + req.params.cssFile);
        }
    });

    server.route({
        method: 'GET',
        path: '/scripts/{jsFile}',
        config: {
            security: true
        },
        handler: function (req, res) {
            console.log("Returning JS file: " + req.params.jsFile);
            return res.file(resourceDir + '/scripts/' + req.params.jsFile);
        }
    });

    //Start our server
    server.start(function(err){
        if (err){
            console.log(err.message || err);
            return pCallback(err, server);
        }
        else {
            console.log('(hapiWrapper) Server has started');
            return pCallback(null,server);
        }
    });
};




