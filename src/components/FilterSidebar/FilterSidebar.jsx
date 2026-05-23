"use client";
import { useState } from "react";
import { STIPEND_RANGES } from "../../constants/filters";
import styles from "./FilterSidebar.module.css";

function FilterSection({ title, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={styles.section}>
      <button
        className={styles.sectionToggle}
        onClick={() => setIsOpen((p) => !p)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={styles.chevron} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} aria-hidden>▾</span>
      </button>
      {isOpen && <div className={styles.sectionBody}>{children}</div>}
    </div>
  );
}

function CheckboxItem({ label, checked, onChange }) {
  return (
    <label className={styles.checkboxItem}>
      <input type="checkbox" checked={checked} onChange={onChange} className={styles.checkbox} />
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  );
}

export default function FilterSidebar({ filterOptions, filters, setters, hasActiveFilters, clearFilters }) {
  const { profiles, locations, durations } = filterOptions;
  const { selectedProfiles, selectedLocations, selectedDurations, stipendIndex, wfhOnly } = filters;
  const { toggleProfile, toggleLocation, toggleDuration, setStipendIndex, setWfhOnly } = setters;

  return (
    <aside className={`${styles.sidebar} sticky-panel`}>
      <div className={styles.header}>
        <span className={styles.title}>
          <span className={styles.titleIcon}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
            </svg>
          </span>
          Filters
        </span>
        {hasActiveFilters && <button className={styles.clearBtn} onClick={clearFilters}>Clear all</button>}
      </div>

      <div className={styles.wfhRow}>
        <span className={styles.wfhLabel}>Work from home only</span>
        <button role="switch" aria-checked={wfhOnly} className={`${styles.toggle} ${wfhOnly ? styles.toggleOn : ""}`} onClick={() => setWfhOnly(!wfhOnly)}>
          <span className={styles.toggleThumb} />
        </button>
      </div>

      <FilterSection title="Profile">
        {profiles.map((p) => (
          <CheckboxItem key={p} label={p} checked={selectedProfiles.includes(p)} onChange={() => toggleProfile(p)} />
        ))}
      </FilterSection>

      <FilterSection title="Location">
        {locations.map((l) => (
          <CheckboxItem key={l} label={l} checked={selectedLocations.includes(l)} onChange={() => toggleLocation(l)} />
        ))}
      </FilterSection>

      <FilterSection title="Duration" defaultOpen={false}>
        {durations.map((d) => (
          <CheckboxItem key={d} label={d} checked={selectedDurations.includes(d)} onChange={() => toggleDuration(d)} />
        ))}
      </FilterSection>

      <FilterSection title="Stipend" defaultOpen={false}>
        {STIPEND_RANGES.map((range, idx) => (
          <label key={range.label} className={styles.radioItem}>
            <input type="radio" name="stipend" className={styles.radio} checked={stipendIndex === idx} onChange={() => setStipendIndex(idx)} />
            <span>{range.label}</span>
          </label>
        ))}
      </FilterSection>
    </aside>
  );
}
