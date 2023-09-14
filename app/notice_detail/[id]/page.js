
import { connectDB } from "@/utill/database";
import styles from "./page.module.css";
import { ObjectId } from "mongodb";
import Commet from "./Commnet";
export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("shop");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div className={styles.detail}>
      <h3>NOTICE Page</h3>
      <div className={styles.detailWrap}>
        <div className={styles.text}>
          <h4 className={styles.title}>Title : {result.title}</h4>
          <p className={styles.content}>content : {result.content}</p>
        </div>
      </div>
      <Commet id={result._id.toString()}/>
    </div>
  );
}