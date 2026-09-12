const MIN_PRICE = 9;
const PRICE_SPAN = 34;

/**
 * Deterministic menu pricing derived from the dish identifier, so the same
 * dish always shows the same price without storing anything.
 */
export function priceForDish(id: string): number {
  const numeric = Number.parseInt(id, 10);
  const seed = Number.isNaN(numeric) ? hashString(id) : numeric;
  return MIN_PRICE + (seed % PRICE_SPAN);
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}
