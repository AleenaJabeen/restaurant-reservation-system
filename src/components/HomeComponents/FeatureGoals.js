import React from 'react';
import styles from '../../styles/Home/FeatureGoals.module.css';
import goalsImg from '../../images/goalImg.avif';
import drinkImg from '../../images/drinkImg.avif';
const FeatureGoals=()=>{
return (
    <>
    <section id='features' className={styles.goalsSection}>

<div className={styles.goalsImg}>
    <img src={goalsImg} alt="featureImg" />
    <img className={styles.drinkImg} src={drinkImg} alt="drinkImg" />
</div>
<div className={styles.cuisine}>
    <h2>Cuisine</h2>
    <h3>Our Goals and History</h3>
    <p>Relax and unwind in a cozy, welcoming environment. Our restaurant is designed to offer a comfortable space, whether you're enjoying a quiet dinner or celebrating a special occasion.</p>
    <button>Read more</button>
</div>
    </section>
    </>
);


}
export default FeatureGoals;