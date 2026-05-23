import styles from "./EmptyState.module.css";

/**
 * EmptyState
 * Shown in the list column when no internships match the active filters.
 *
 * Props:
 *  - onClearFilters : resets all filters when the CTA button is clicked
 */
export default function EmptyState({ onClearFilters }) {
  return (
    <div className={styles.container} role="status" aria-live="polite">
      <span className={styles.emoji} aria-hidden="true">😕</span>
      <h3 className={styles.heading}>No internships match your filters</h3>
      <p className={styles.sub}>Try adjusting or clearing your active filters.</p>
      <button className={styles.btn} onClick={onClearFilters}>
        Clear all filters
      </button>
    </div>
  );
}
