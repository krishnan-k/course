const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


//Connect to frontend and backend using cors middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend checking');
})
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://krishnank281099:Krish281099@cluster0.0hjco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const onlineCourse = client.db('coursedata').collection('merndevelopment');

        //post method
        app.post("/coursemern", async (req, res) => {
            const data = req.body;
            const result = await onlineCourse.insertOne(data);
            res.send(result);
        });
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`listing on port ${port}`);
})
