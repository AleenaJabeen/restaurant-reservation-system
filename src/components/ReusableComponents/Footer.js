import React from 'react';
import styles from '../../styles/Reusable/Footer.module.css'
import logo from '../../images/logo.webp'
const Footer=()=>{
    return (
    <>
<footer>
    <div className={styles.addressSection}>
        <div className={styles.address}>
            <h3>Contact Us</h3>
            <p>T,+1 2551 1267 <br />

        M.nexus@gmail.com</p>
        </div>
        <div className={styles.address}>
            <h3>Address</h3>
            <p>20 Cooper Square Newyork <br />
            NY,70000 UK</p>
            
        </div>
        <div className={styles.address}>
            <h3>Opening Hours</h3>
            <p>Everyday :From 09:30 to 23:00 <br />
            Kitchen closes at 22:00</p>  
        </div>
    </div>
    <div className={styles.copyRight}>
       
        <div className={styles.brand}>
        <hr />
            <img src={logo} alt="" />
            <h3>NexusBite</h3>
            <hr />
        </div> 
    </div>
    <div className={styles.claim}>
<p>Copyright: &copy;  2024 NexusBite All Rights Reserved</p>
    </div>

</footer>
    </>
    );

}
export default Footer;