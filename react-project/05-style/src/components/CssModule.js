import styles from "../styles/origin.module.css";

function CssModule() {
  return (
    <>
      <div className={styles.origin}>
        <div className={`${styles.box} ${styles.red}`}></div>

        {/* .join(기준)은 여러 배열을 합쳐서 하나의 문자열로 반환해 줌 */}
        <div className={[styles.box, styles.orange].join(" ")}></div>

        <div className={`${styles.box} ${styles.yellow}`}></div>
        <div className={`${styles.box} ${styles.green}`}></div>
        <div className={`${styles.box} ${styles.blue}`}></div>
        <div className={`${styles.box} ${styles.purple}`}></div>
      </div>
    </>
  );
}

export default CssModule;
