const FAVORITES_KEY = "argdriver_favorites_v1";

export const getFavoriteIds = (): number[] => {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) {
      return arr.filter((x) => typeof x === "number");
    }
  } catch (e) {
    // ignore
  }
  return [];
};

export const setFavoriteIds = (ids: number[]) => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...new Set(ids)]));
  } catch (e) {
    // ignore
  }
};

export const isFavorite = (id: number): boolean => {
  return getFavoriteIds().includes(id);
};

export const toggleFavorite = (id: number): boolean => {
  const ids = new Set(getFavoriteIds());
  let nowFav = false;
  if (ids.has(id)) {
    ids.delete(id);
    nowFav = false;
  } else {
    ids.add(id);
    nowFav = true;
  }
  setFavoriteIds(Array.from(ids));
  return nowFav;
};
