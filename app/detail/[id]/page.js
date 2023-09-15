import Link from "next/link"
import styles from "./page.module.css"
import { connectDB } from "@/utill/database"
import { ObjectId } from "mongodb"
import Cart from "@/component/Cart"

export default async function Detail(props) {
   const client = await connectDB
   const db = client.db("shop")
   let result = await db.collection("new").findOne({_id: new ObjectId(props.params.id)})
   console.log(result)
   return (
      <div className={styles.detail}>
         <h3 className={styles.h3}>상세페이지</h3>
         <div className={styles.detailWrap}>
            <div className={styles.imgWrap}>
               <img src={result.image} alt={result.title}/>
            </div>
            <div className={styles.text}>
               <h4 className={styles.h4}> {result.title}</h4>
               <p className={styles.price}> {result.price}</p>
               <p className={styles.des}> {result.description}</p>
               <p className={styles.card}> {result.card}</p>
               <p className={styles.dilivery}> <span>배송비</span> 만원 이상 무료배송</p>
               <p className={styles.color}> <span className={styles.span}>color</span> <input type="text" /></p>
               <p className={styles.size}><span className={styles.span}> size</span> <input type="text" /></p>
               <Cart result={result}/>
            </div>
         </div>
      </div>
   )
}
