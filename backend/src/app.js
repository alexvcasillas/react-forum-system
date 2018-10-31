import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import chalk from 'chalk';
import initializeDb from './db';
import config from './config.json';
import { authService } from './services/auth.service';
import graphqlHTTP from 'express-graphql';
require('dotenv').config();

import { GraphQLService } from './graphql/graphql.service';
import { Loaders } from './graphql/graphql.loaders';
// SECURITY
import { Security } from './graphql/security/security';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(
  cors({
    exposedHeaders: config.corsHeaders,
    credentials: true,
    origin: 'http://localhost:3000',
  }),
);

app.use(
  bodyParser.json({
    limit: config.bodyLimit,
  }),
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// connect to db
initializeDb(db => {
  // Auth Service
  const auth = authService();
  // Import the Secutiry Stuff for Queries and Mutations
  const security = Security(db, auth);

  const { UserLoader, CommunityLoader, ThreadLoader, PostLoader } = Loaders({ db });

  app.use(
    '/graphql',
    graphqlHTTP((req, res) => {
      return {
        context: {
          request: req,
          response: res,
          loaders: {
            user: new UserLoader(),
            community: new CommunityLoader(),
            thread: new ThreadLoader(),
            post: new PostLoader(),
          },
          headers: req.headers,
          token: req.cookies.token || null,
          db: db,
          auth: auth,
          security: security,
        },
        schema: GraphQLService(),
        graphiql: true,
        // formatError: err => {
        //   return err;
        //   try {
        //     const error = JSON.parse(err.message);
        //     return {
        //       message: error.message,
        //       status: error.status,
        //     };
        //   } catch (error) {
        //     console.log('Error?: ', error);
        //   }
        // },
      };
    }),
  );

  app.server.listen(process.env.PORT || config.port, () => {
    console.log(
      `[ ${chalk.blue('React Forum System Backend')} ] Worker process ${chalk.green(
        process.pid,
      )} started on port ${chalk.green(app.server.address().port)}`,
    );
  });
});

export default app;
