"use client";

import { useState } from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import InternshipList from "../components/InternshipList/InternshipList";
import DetailPanel from "../components/DetailPanel/DetailPanel";
import { useInternshipFilters } from "../hooks/useInternshipFilters";
import "../styles/globals.css";
import styles from "./page.module.css";

/**
 * Home (Search Page)
 * Top-level page: composes all UI sections, manages selected-card state.
 * All filter logic lives in useInternshipFilters.
 */
export default function Home() {
  const [activeId, setActiveId] = useState(null);

  const {
    filters,
    setters,
    filteredList,
    clearFilters,
    hasActiveFilters,
    filterOptions,
  } = useInternshipFilters();

  const activeInternship = filteredList.find((i) => i.id === activeId) ?? null;

  return (
    <>
      <Header resultCount={filteredList.length} />

      {/* Hero search bar */}
      <div className={styles.heroBar}>
        <div className={`page-wrapper ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Find your perfect internship</h1>
            <p className={styles.heroSub}>Browse {filteredList.length}+ opportunities from top companies</p>
          </div>
          <div className={styles.searchRow}>
            <div className={styles.searchWrapper}>
              <SearchBar
                value={filters.searchQuery}
                onChange={setters.setSearchQuery}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main 3-column layout */}
      <div className="page-wrapper">
        <div className="main-layout">
          <FilterSidebar
            filterOptions={filterOptions}
            filters={filters}
            setters={setters}
            hasActiveFilters={hasActiveFilters}
            clearFilters={clearFilters}
          />

          <InternshipList
            internships={filteredList}
            activeId={activeId}
            onSelect={setActiveId}
            onClearFilters={clearFilters}
          />

          <DetailPanel internship={activeInternship} />
        </div>
      </div>
    </>
  );
}
