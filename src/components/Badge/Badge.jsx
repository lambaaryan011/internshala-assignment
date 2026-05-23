import styles from "./Badge.module.css";

/**
 * Badge
 * Small coloured pill for labels like "Remote", "International", etc.
 *
 * Props:
 *  - children : label text
 *  - color    : hex accent colour (background is auto-lightened via opacity)
 */
export default function Badge({ children, color = "#006BFF" }) {
  return (
    <span
      className={styles.badge}
      style={{
        background: color + "15",
        color,
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}
