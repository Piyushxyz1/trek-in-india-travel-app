import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const options = {
  tlsAllowInvalidCertificates: true,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {    //runs if we are in development
  if (!global._mongoClientPromise) {                       
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);   //runs if we are in production
  clientPromise = client.connect();
}

export default clientPromise;
