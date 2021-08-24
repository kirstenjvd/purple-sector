import * as React from "react"
import * as styles from "./testimonials.module.css"
import SlickSlider from "./simpleSlider"

import choco from "../../images/choco.png"
import comm from "../../images/comm.png"
import timeless from "../../images/timeless.png"

const Testimonials = () => (
  <section>
    <div className="ContentContainer">
      <div className={styles.topWrapper}>
        <h3>Who we've worked with</h3>
        <img role="presentation" alt="" src={choco}/>
        <img role="presentation" alt="" src={comm}/>
        <img role="presentation" alt="" src={timeless}/>
      </div>
      <div className={styles.sliderWrapper}>
        <SlickSlider/>
      </div>
    </div>
  </section>
)
export default Testimonials