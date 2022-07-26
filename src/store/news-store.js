import create from "zustand";

export const useNewsStore = create((set) => ({
  hits: [],
  loading: false,
  errorMessage: "",
  fetch: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await fetch(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      const data = await response.json();
      set(() => ({ hits: data.hits, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
}));
