
import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}`;

    let rebody = {
      title: req.body.title,
      content: req.body.content,
      createdAt: formattedDate,
    };
    const client = await connectDB;
    const db = client.db("shop");
    let result = await db.collection("post").updateOne({ _id: new ObjectId(req.body._id) }, { $set: rebody });
    res.redirect(302, "/notice");
    console.log(result);
  }
}