'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const router = require('./router/index.js');

// should only use this one time, so we don't deregister other middleware
router.useMiddleware(require('./router/dom').transition);

const routerEvents = require('./router/events.js');

$(() => {
  router.start();
  routerEvents.addHandlers();
});
