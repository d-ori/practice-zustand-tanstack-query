export const API_URL = `http://localhost:3000`;

// query key factory
export const QUERY_KEYS = {
  todo: {
    all: ["todo"],
    list: ["todo", "list"],
    detail: (id: string) => ["todo", "list", id],
  },
};
