import styles from "./Tag.module.css";

/**
 * Tag
 * Small grey chip used to surface internship metadata
 * (location, duration, stipend, etc.).
 *
 * Props:
 *  - icon     : emoji or icon element shown before the label
 *  - children : text content
 */
export default function Tag({ icon, children }) {
  return (
    <span className={styles.tag}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      {children}
    </span>
  );
}
