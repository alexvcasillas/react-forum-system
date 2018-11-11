require('@babel/polyfill');
const cpus = require('os').cpus;
const cluster = require('cluster');
const chalk = require('chalk');
require('dotenv').config();

const app = require('./app');

const isDev = process.env.ENV === 'development';

if (isDev) {
  const app = require('./app');
} else {
  // Check for Master
  if (cluster.isMaster) {
    // Instantiate clusters based on CPU cores
    for (let cpu in cpus()) {
      cluster.fork();
    }
    // Online Listener for Cluster
    cluster.on('online', function(worker) {
      if (isDev) {
        console.log(`[ ${chalk.green.bold('LOGLY WORKER ONLINE')} ]`);
        console.log(`Worker PID: ${chalk.yellow(worker.process.pid)}`);
        console.log(chalk.gray('----'));
      }
    });
    // Exit Listener for Cluster
    cluster.on('exit', function(worker, code, signal) {
      if (isDev) {
        console.log(`[ ${chalk.red.bold('LOGLY WORKER DIED')} ]`);
        console.log(chalk.gray('----'));
        console.log(`Worker PID: ${chalk.yellow(worker.process.pid)}`);
        console.log(`Code: ${chalk.yellow(code)}`);
        console.log(`Signal: ${chalk.yellow(signal)}`);
        console.log(chalk.gray('----'));
        console.log('Starting a new worker process...');
        console.log(chalk.gray('----'));
        cluster.fork();
      }
    });
    console.log(
      `[ PID: ${process.pid} ] ${chalk.green.bold('LOGLY APP')} started on port ${chalk.green(process.env.PORT)}`,
    );
  } else {
    const app = require('./app');
  }
}
