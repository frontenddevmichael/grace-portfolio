import styles from "./Home.module.css"
import heroImg from "../../../public/heroImg.jpeg"
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.eyebrow}>Creative explorer
        </div>
        <h1 className={styles.name}>Grace Ufuah</h1>
        <span className={styles.roles}>
          <p>Content Creator.</p>
          <p>Product designer</p>
        </span>
        <span className={styles.description}>
          <p>Computer Science student and Creative Designer, designing flyers, brand visuals and digital experiences. </p>
        </span>
        <div className={styles.buttons}>
          <button className={styles.button}>View My Work</button>
          <button className={styles.button2}>Let's Talk</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.tornPaper}>
          <img src={heroImg} alt="Grace Ufuah" className={styles.photo} />
        </div>
      </div>
    </div>
  )
}