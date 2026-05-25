// src/utils/storage.ts

export async function loadData(key: string) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error loading data:", error);
    return null;
  }
}

export async function saveData(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data:", error);
  }
}