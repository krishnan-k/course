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
const uri = "mongodb+srv://krishnank281099:Krishna123@cluster0.so5b0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
        const onlineCourse = client.db('academycourse').collection('courseone');
        const onlineChapter = client.db('coursedata').collection('chapter');
        const onlineTopic = client.db('topicdata').collection('topic');

        //post method
        app.post("/coursemern", async (req, res) => {
            const data = req.body;
            const result = await onlineCourse.insertOne(data);
            res.send(result);
        });

        app.post("/chapter", async (req, res) => {
            const data = req.body;
            const result = await onlineChapter.insertOne(data);
            res.send(result);
        });
        app.post("/topic", async (req, res) => {
            const data = req.body;
            const result = await onlineTopic.insertOne(data);
            res.send(result);
        });

        //get method
        app.get("/courseget", async (req, res) => {
            const data = await onlineCourse.find().toArray();
            res.send(data);
        })
        app.get("/chapterget", async (req, res) => {
            const data = await onlineChapter.find().toArray();
            res.send(data);
        })
        app.get("/chapterview/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await onlineChapter.findOne(filter)
            res.send(result)
        })
        app.get("/topicget", async (req, res) => {
            const data = await onlineTopic.find().toArray();
            res.send(data);
        })

        app.get("/topview/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await onlineTopic.findOne(filter)
            res.send(result)
        })


        //update method
        app.patch("/chapterupdate/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const data = req.body

            const updateData = {
                $set: {
                    ...data
                }
            }
            const option = { upsert: true }
            const result = await onlineChapter.updateOne(
                filter,
                updateData,
                option
            )
            res.send(result);
        })
        app.patch("/topicupdate/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const data = req.body

            const updateData = {
                $set: {
                    ...data
                }
            }
            const option = { upsert: true }
            const result = await onlineTopic.updateOne(
                filter,
                updateData,
                option
            )
            res.send(result);
        })

        //delete method
        app.delete("/delete/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await onlineCourse.deleteOne(filter);
            res.send(result);
        })
        app.delete("/deletechapter/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await onlineChapter.deleteOne(filter);
            res.send(result);
        })
        app.delete("/deletetopic/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await onlineTopic.deleteOne(filter);
            res.send(result);
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.listen(port, () => {
    console.log(`listing on port ${port}`);
})
