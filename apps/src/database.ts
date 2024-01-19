// // src/database.ts
//
// import { MongoClient } from 'mongodb';
// import { dbConfig } from '../config/db.conf';
//
// export class Database {
//     public client: MongoClient;
//     public db: any;
//
//     constructor() {
//         this.client = new MongoClient(dbConfig.url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//     }
//
//     async connect() {
//         try {
//             await this.client.connect();
//             this.db = this.client.db(dbConfig.dbName);
//             console.log('Connected to MongoDB');
//         } catch (error) {
//             console.error('Could not connect to DB: ', error);
//             process.exit(1);
//         }
//     }
//
//     async disconnect() {
//         await this.client.close();
//         console.log('Disconnected from MongoDB');
//     }
// }
