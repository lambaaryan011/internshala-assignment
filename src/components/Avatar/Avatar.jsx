import styles from "./Avatar.module.css";

// Deterministic colour from company name
const COLORS = ["#006BFF", "#E94444", "#00A86B", "#F97316", "#7C3AED"];

function getColor(name) {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) & 0xffff;
  return COLORS[hash % COLORS.length];
}

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/**
 * Avatar
 * Renders a coloured square with the company's initials.
 * Falls back gracefully if no name is provided.
 */
export default function Avatar({ name = "?", size = 48 }) {
  const color = getColor(name);

  return (
    <div
      className={styles.avatar}
      style={{
        width: size,
        height: size,
        background: color + "18",
        border: `1.5px solid ${color}30`,
        color,
        fontSize: size * 0.3,
        borderRadius: size * 0.2,
      }}
    >
      {getInitials(name)}
    </div>
  );
}
