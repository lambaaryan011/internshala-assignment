/**
 * Static constants used across the filter sidebar and filtering logic.
 * Centralising these here means UI labels and range values are changed
 * in one place only.
 */

export const STIPEND_RANGES = [
  { label: "Any stipend", min: 0, max: Infinity },
  { label: "₹0 – ₹5,000", min: 0, max: 5000 },
  { label: "₹5,001 – ₹10,000", min: 5001, max: 10000 },
  { label: "₹10,001 – ₹25,000", min: 10001, max: 25000 },
  { label: "₹25,000+", min: 25000, max: Infinity },
];

export const FILTER_KEYS = {
  PROFILES: "profiles",
  LOCATIONS: "locations",
  DURATIONS: "durations",
  STIPEND: "stipend",
  WFH: "wfh",
};
