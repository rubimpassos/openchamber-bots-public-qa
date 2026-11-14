// Synthetic QA fixture: the lower-bound defect is intentional.
export function clamp(value, minimum, maximum) {
  return Math.min(value, maximum);
}
