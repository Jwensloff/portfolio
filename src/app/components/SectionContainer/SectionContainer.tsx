import styles from "./SectionContainer.module.css";

export default function SectionContainer({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.innerContainer}>{children}</div>
    </section>
  );
}
