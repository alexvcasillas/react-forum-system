"use strict";

require('@babel/polyfill');

var cpus = require('os').cpus;

var cluster = require('cluster');

var chalk = require('chalk');

require('dotenv').config();

var app = require('./app');

var isDev = process.env.ENV === 'development';

if (isDev) {
  var _app = require('./app');
} else {
  // Check for Master
  if (cluster.isMaster) {
    // Instantiate clusters based on CPU cores
    for (var cpu in cpus()) {
      cluster.fork();
    } // Online Listener for Cluster


    cluster.on('online', function (worker) {
      if (isDev) {
        console.log("[ ".concat(chalk.green.bold('LOGLY WORKER ONLINE'), " ]"));
        console.log("Worker PID: ".concat(chalk.yellow(worker.process.pid)));
        console.log(chalk.gray('----'));
      }
    }); // Exit Listener for Cluster

    cluster.on('exit', function (worker, code, signal) {
      if (isDev) {
        console.log("[ ".concat(chalk.red.bold('LOGLY WORKER DIED'), " ]"));
        console.log(chalk.gray('----'));
        console.log("Worker PID: ".concat(chalk.yellow(worker.process.pid)));
        console.log("Code: ".concat(chalk.yellow(code)));
        console.log("Signal: ".concat(chalk.yellow(signal)));
        console.log(chalk.gray('----'));
        console.log('Starting a new worker process...');
        console.log(chalk.gray('----'));
        cluster.fork();
      }
    });
    console.log("[ PID: ".concat(process.pid, " ] ").concat(chalk.green.bold('LOGLY APP'), " started on port ").concat(chalk.green(process.env.PORT)));
  } else {
    var _app2 = require('./app');
  }
}