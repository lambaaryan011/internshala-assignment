import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
      </span>
      <input
        type="text"
        className={styles.input}
        placeholder="Search by role, company or keyword..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search internships"
      />
      {value && (
        <button className={styles.clear} onClick={() => onChange("")} aria-label="Clear search">×</button>
      )}
    </div>
  );
}
