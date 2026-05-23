import { useState, useMemo } from "react";
import internships from "../data/internships";
import { STIPEND_RANGES } from "../constants/filters";

/**
 * useInternshipFilters
 *
 * Encapsulates ALL filter state and derived filtered list.
 * Components only need to call this hook — no filter logic lives in JSX.
 *
 * Returns:
 *  - filters        : current values for each filter
 *  - setters        : individual setter functions for each filter
 *  - filteredList   : internships after applying every active filter
 *  - clearFilters   : resets every filter to its default
 *  - hasActiveFilters: boolean — true when any filter is non-default
 *  - filterOptions  : derived unique values for Profile, Location, Duration
 */
export function useInternshipFilters() {
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [stipendIndex, setStipendIndex] = useState(0); // index into STIPEND_RANGES
  const [wfhOnly, setWfhOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // ── Toggle helpers ──────────────────────────────────────────────────────────
  const toggleMulti = (setter, value) =>
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  // ── Derived unique options from the dataset ──────────────────────────────
  const filterOptions = useMemo(() => {
    const profiles = [...new Set(internships.map((i) => i.profile_name))].sort();
    const locations = [...new Set(internships.flatMap((i) => i.location_names))].sort();
    const durations = [...new Set(internships.map((i) => i.duration))].sort(
      (a, b) => parseInt(a) - parseInt(b)
    );
    return { profiles, locations, durations };
  }, []);

  // ── Core filter logic ────────────────────────────────────────────────────
  const filteredList = useMemo(() => {
    const range = STIPEND_RANGES[stipendIndex];
    const query = searchQuery.trim().toLowerCase();

    return internships.filter((item) => {
      // Profile filter
      if (selectedProfiles.length && !selectedProfiles.includes(item.profile_name))
        return false;

      // Location filter — item passes if ANY of its locations is selected
      if (
        selectedLocations.length &&
        !item.location_names.some((loc) => selectedLocations.includes(loc))
      )
        return false;

      // Duration filter
      if (selectedDurations.length && !selectedDurations.includes(item.duration))
        return false;

      // Stipend filter
      if (
        item.stipend.salaryValue1 < range.min ||
        item.stipend.salaryValue1 > range.max
      )
        return false;

      // Work from home filter
      if (wfhOnly && !item.work_from_home) return false;

      // Text search — title, company, profile
      if (
        query &&
        !item.title.toLowerCase().includes(query) &&
        !item.company_name.toLowerCase().includes(query) &&
        !item.profile_name.toLowerCase().includes(query)
      )
        return false;

      return true;
    });
  }, [
    selectedProfiles,
    selectedLocations,
    selectedDurations,
    stipendIndex,
    wfhOnly,
    searchQuery,
  ]);

  // ── Clear all filters ─────────────────────────────────────────────────────
  const clearFilters = () => {
    setSelectedProfiles([]);
    setSelectedLocations([]);
    setSelectedDurations([]);
    setStipendIndex(0);
    setWfhOnly(false);
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedProfiles.length > 0 ||
    selectedLocations.length > 0 ||
    selectedDurations.length > 0 ||
    stipendIndex !== 0 ||
    wfhOnly ||
    searchQuery.trim() !== "";

  return {
    filters: {
      selectedProfiles,
      selectedLocations,
      selectedDurations,
      stipendIndex,
      wfhOnly,
      searchQuery,
    },
    setters: {
      toggleProfile: (v) => toggleMulti(setSelectedProfiles, v),
      toggleLocation: (v) => toggleMulti(setSelectedLocations, v),
      toggleDuration: (v) => toggleMulti(setSelectedDurations, v),
      setStipendIndex,
      setWfhOnly,
      setSearchQuery,
    },
    filteredList,
    clearFilters,
    hasActiveFilters,
    filterOptions,
  };
}
