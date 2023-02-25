import styles from "./button.module.css";

const Button = () => {
  return (
    <>
      <div className={styles.button}>Click</div>
      <div id={styles.item}>Click Blue button</div>
      <div id={styles.div2}>Click button</div>
    </>
  );
};

export default Button;
