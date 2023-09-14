import React from 'react';
import { MongoClient } from 'mongodb';

const url=process.env.SERCT_KEY
const options = { useNewUrlParser: true };
console.log(options)
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
