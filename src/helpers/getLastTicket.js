
export const getLastTicket = async() => {
  const resp = await fetch(import.meta.env.VITE_BACKEND_URL);

    const { lastTicket } = await resp.json();

    return lastTicket;

}
