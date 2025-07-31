const API_BASE = import.meta.env.VITE_API_URL || '';

export async function getTestMessage() {
  const res = await fetch(`${API_BASE}/api/test`);
  return res.json();
}
