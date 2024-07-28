import { MongoClient } from "mongodb";

export async function connectToDatabse() {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.mongodb.net/${process.env.mongodb_dbname}?retryWrites=true&w=majority&appName=${process.env.mongodb_appname}`
    )

    return client;
}
