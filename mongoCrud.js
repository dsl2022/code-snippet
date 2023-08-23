const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to server');

  const db = client.db(dbName);

  // Example: Inserting a document
  const collection = db.collection('documents');
  const document = { name: 'John Doe', age: 30 };
  collection.insertOne(document, (err, result) => {
    if (err) {
      console.error('Error inserting document:', err);
    } else {
      console.log('Document inserted:', result.insertedId);
    }
    
    // Example: Reading documents
    collection.find({}).toArray((err, documents) => {
      if (err) {
        console.error('Error reading documents:', err);
      } else {
        console.log('Documents:', documents);
      }

      // Close the connection
      client.close();
    });
  });
});
