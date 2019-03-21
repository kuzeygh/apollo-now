import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import createServer from './createServer';

const app = express();
const server = createServer();

app.use(cookieParser());

app.use((req, res, next) => {
  // const { token } = req.cookies;
  console.log(' : ---------------');
  console.log(' : req.cookies', req.cookies);
  console.log(' : ---------------');

  // if (token) {
  //   const { userId } = jwt.verify(token, process.env.JWT_SECRET);
  //   // Put the userId onto the req for future requests to access
  //   req.userId = userId;
  // }

  next();
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: process.env.PORT || 4000 }, err => {
  if (err) throw err;
  console.log(
    `Apollo Server ready at http://localhost:${process.env.PORT}${
      server.graphqlPath
    }`
  );
});
