require('@babel/polyfill');
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import chalk from 'chalk';
import initializeDb from './db';
import { config } from './config';
import { authService } from './services/auth.service';
import graphqlHTTP from 'express-graphql';
require('dotenv').config();

import { GraphQLService } from './graphql/graphql.service';
import { Loaders } from './graphql/graphql.loaders';
// SECURITY
import { Security } from './graphql/security/security';

const isDev = process.env.ENV === 'development';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(
  cors({
    exposedHeaders: config.corsHeaders,
    credentials: true,
    origin: isDev ? 'http://localhost:3000' : config.frontendApp,
  }),
);

app.use(
  bodyParser.json({
    limit: config.bodyLimit,
  }),
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// AUTHENTICATION MIDDLEWARE FOR SSR
app.use((req, res, next) => {
  req.authorization = req.cookies.token || (req.headers.authorization ? req.headers.authorization.split(' ')[1] : null);
  next();
});

// connect to db
initializeDb(db => {
  // Auth Service
  const auth = authService();
  // Import the Secutiry Stuff for Queries and Mutations
  const security = Security(db, auth);

  const { UserLoader, CommunityLoader, ThreadLoader, ReplyLoader } = Loaders({ db });

  app.use(
    '/graphql',
    graphqlHTTP((request, response) => ({
      context: {
        request: request,
        response: response,
        db: db,
        auth: auth,
        security: security,
        loaders: {
          user: UserLoader(),
          community: CommunityLoader(),
          thread: ThreadLoader(),
          reply: ReplyLoader(),
        },
      },
      schema: GraphQLService(),
      graphiql: true,
    })),
  );

  app.server.listen(process.env.PORT || config.port, () => {
    console.log(
      `[ ${chalk.blue('React Forum System Backend')} ] Worker process ${chalk.green(
        process.pid,
      )} started on port ${chalk.green(process.env.PORT || config.port)}`,
    );
  });
});
