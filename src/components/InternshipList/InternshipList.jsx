import InternshipCard from "../InternshipCard/InternshipCard";
import styles from "./InternshipList.module.css";

export default function InternshipList({ internships, activeId, onSelect, onClearFilters }) {
  if (!internships.length) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🔍</div>
          <p className={styles.emptyTitle}>No internships found</p>
          <p className={styles.emptyText}>Try adjusting your filters or search query to find more opportunities.</p>
          <button className={styles.emptyBtn} onClick={onClearFilters}>Clear all filters</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <span className={styles.resultText}>
          <span className={styles.resultNum}>{internships.length}</span> internships found
        </span>
        <select className={styles.sortSelect} aria-label="Sort by">
          <option>Most recent</option>
          <option>Highest stipend</option>
          <option>Shortest duration</option>
        </select>
      </div>
      <div className={styles.list}>
        {internships.map((internship) => (
          <InternshipCard
            key={internship.id}
            internship={internship}
            isActive={internship.id === activeId}
            onClick={() => onSelect(internship.id === activeId ? null : internship.id)}
          />
        ))}
      </div>
    </div>
  );
}
