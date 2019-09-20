export default function getTokenTimeRemaining(decodedToken) {
  const now = new Date().getTime() / 1000;
  const diff = decodedToken.exp - now;
  console.log(`Hours left: ${new Date(diff * 1000).getHours()}, Minutes: ${new Date(diff * 1000).getMinutes()}`);
}