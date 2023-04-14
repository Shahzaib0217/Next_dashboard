// // const mongoose = require('mongoose')
// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const TableSchema = new Schema({
//     title: { type: String },
//     date: { type: Date, default: Date.now },
// });
// // , { timestamps: true })
// const table = mongoose.model('Table') || new mongoose.model("Table", TableSchema);
// export default table;
import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new Schema({
    title: String,
    date: { type: Date, default: new Date() },
    createdAt: { type: Date, default: Date.now },
});
mongoose.set('strictQuery', true);
export default new mongoose.model("TableData", tableSchema);