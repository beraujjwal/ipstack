export interface language {
  code: string;
  name: string;
  native: string;
}

export interface location {
  geoname_id: number;
  capital: string;
  languages: language[];
  country_flag: string;
  country_flag_emoji: string;
  country_flag_emoji_unicode: string;
  calling_code: string;
  is_eu: boolean;
}

export interface timeZone {
  id: string;
  current_time: string;
  gmt_offset: number;
  code: string;
  is_daylight_saving: boolean;
}

export interface currency {
  code: string;
  name: string;
  plural: string;
  symbol: string;
  symbol_native: string;
}

export interface connection {
  asn: number;
  isp: string;
}

export interface security {
  is_proxy: boolean;
  proxy_type: string | null;
  is_crawler: boolean;
  crawler_name: string | null;
  crawler_type: string | null;
  is_tor: boolean;
  threat_level: string;
  threat_types: string | null;
}

export interface IIpstack {
  ip: string;
  hostname: string;
  type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  location: location;
  time_zone: timeZone;
  currency: currency;
  connection: connection;
  security: security;
}
