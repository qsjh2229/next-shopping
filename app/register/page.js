import React from 'react';
import styles from'./page.module.css'
import Join from "@/component/Join"

const register = () => {
   
   return (
      <div className={styles.signForm}>
         <h2> 회원가입 </h2>
        <Join></Join>
      </div>
   );
};

export default register;