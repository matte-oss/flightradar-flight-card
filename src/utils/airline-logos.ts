import { AIRLINE_LOGOS } from 'virtual:airline-logos';

export { AIRLINE_LOGOS as airlineLogos };

export function isValidAirlineLogo(
  airlineIcao?: string | null
): airlineIcao is (typeof AIRLINE_LOGOS)[number] {
  if (!airlineIcao) return false;

  return AIRLINE_LOGOS.includes(airlineIcao);
}
