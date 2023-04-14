import { Router } from "express";
import TableData from "../Model/table.js"

const router = Router();

router.get('/updateData/:title', async (req, res) => {
    const title = req.params;
    // const sanitizedTitle = String(title);
    await TableData.create({ title: title.title });
    res.send("Database Updated!!");
});

router.get('/sendData', async (req, res) => {
    const db_data = await TableData.find({}).sort({ created: -1 });
    res.json({ data: db_data })
})

export default router;
