
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.ATLAS_URI

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let _db;

module.exports = {
    run: async (cb) => {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        _db = await client.db(`miraki_tasks`)
        // console.log('_db', _db);
        // Send a ping to confirm a successful connection
        // await client.db("miraki_tasks").command({ ping: 1 });
        cb("Pinged your deployment. You successfully connected to MongoDB!");
    },
    getDb: () => {
        return _db;
    }
}