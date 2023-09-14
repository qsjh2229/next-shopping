import React from "react"
import styles from "./page.module.css"
const Write = () => {
   return (
      <div className={styles.writeWrap}>
         <h4>글작성</h4>
         <form action='api/post/new' method="POST" >
            <input type='text' name='title' placeholder='글 제목을 쓰시오' />
            <textarea
               name='content'
               cols='30'
               rows='10'
               placeholder='글 내용'
            ></textarea>
            <button type="submit">버튼</button>
         </form>
      </div>
   )
}

export default Write
