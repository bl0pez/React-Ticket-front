
export const getLastTicket = async() => {
  const resp = await fetch('http://localhost:8080/last-ticket');

    const { lastTicket } = await resp.json();

    return lastTicket;

}
