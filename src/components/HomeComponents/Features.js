import React from "react";
import styles from "../../styles/Home/Features.module.css";
import featureImg from "../../images/featureImg.avif";
import chefImg from "../../images/chefImg.avif";
const Features = () => {
  return (
    <>
      <section className={styles.featuresSection}>
        <div className={styles.chef}>
          <h2>Chef 's</h2>
          <h3>Only the finest food & exceptional service</h3>
          <p>
            We believe in serving dishes made from the freshest ingredients.
            Each ingredient is carefully selected to ensure top quality,
            delivering flavors that make every bite unforgettable.
          </p>
          <button>Read more</button>
        </div>
        <div className={styles.featuresImg}>
          <img src={featureImg} alt="featureImg" />
          <img className={styles.chefImg} src={chefImg} alt="chefImg" />
        </div>
      </section>
    </>
  );
};
export default Features;
