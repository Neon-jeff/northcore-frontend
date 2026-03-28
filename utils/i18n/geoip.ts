const countryToLocale: Record<string, string> = {
  // Japanese
  JP: "ja",
  // Chinese
  CN: "zh",
  TW: "zh",
  HK: "zh",
  SG: "zh",
  // Spanish
  ES: "es",
  MX: "es",
  AR: "es",
  CL: "es",
  CO: "es",
  PE: "es",
  VE: "es",
  EC: "es",
  GT: "es",
  CU: "es",
  BO: "es",
  DO: "es",
  HN: "es",
  PY: "es",
  SV: "es",
  NI: "es",
  CR: "es",
  PR: "es",
  UY: "es",
  PA: "es",
  // German
  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",
  // French
  FR: "fr",
  BE: "fr",
  LU: "fr",
  MC: "fr",
  CI: "fr",
  SN: "fr",
  MG: "fr",
  CD: "fr",
  CG: "fr",
  NE: "fr",
  TG: "fr",
  ML: "fr",
  BF: "fr",
  BJ: "fr",
  BI: "fr",
  KM: "fr",
  DJ: "fr",
  GA: "fr",
  GN: "fr",
  GQ: "fr",
  HT: "fr",
  SC: "fr",
  TD: "fr",
  VU: "fr",
};

export async function detectLanguageFromIP(): Promise<string | null> {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    if (data && data.country_code) {
      return countryToLocale[data.country_code] || "en";
    }
  } catch (error) {
    console.error("Failed to detect language from IP:", error);
  }
  return null;
}
