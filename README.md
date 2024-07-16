## ipstack

** ipstack-api ** is an npm package that provides a simple and efficient way to convert IP addresses to detailed geographical information using the ipstack API. This package is ideal for developers who need to enrich their applications with location-based data, enabling features such as personalized content, fraud prevention, and enhanced analytics.

## Features

- **IP to Location**: Convert IP addresses to accurate geographical information, including country, region, city, latitude, and longitude.
- **Additional Details**: Access additional data such as ZIP code, time zone, currency, and ISP information.
- **Structured Format**: Data is well-organized and easy to navigate, ensuring seamless integration into your projects.
- **TypeScript Support**: Seamless compatibility with both JavaScript and TypeScript projects.
- **Easy to Use**: Straightforward API for quick and easy integration into your applications.

# Install

`npm i ipstack-api`

# Usage

- ES6 Module usage

  ```js
  import { ipstack, IIpstack } from "ipstack-api";
  ipstack("8.8.8.8", "<your ipstack api key>", (err, response) => {
    console.log(response);
  });
  ```

# Example structure data

type: **json | IIpstack**

```js
{
  "ip": "134.201.250.155",
  "hostname": "134.201.250.155",
  "type": "ipv4",
  "continent_code": "NA",
  "continent_name": "North America",
  "country_code": "US",
  "country_name": "United States",
  "region_code": "CA",
  "region_name": "California",
  "city": "Los Angeles",
  "zip": "90013",
  "latitude": 34.0453,
  "longitude": -118.2413,
  "location": {
    "geoname_id": 5368361,
    "capital": "Washington D.C.",
    "languages": [
        {
          "code": "en",
          "name": "English",
          "native": "English"
        }
    ],
    "country_flag": "https://assets.ipstack.com/images/assets/flags_svg/us.svg",
    "country_flag_emoji": "🇺🇸",
    "country_flag_emoji_unicode": "U+1F1FA U+1F1F8",
    "calling_code": "1",
    "is_eu": false
  },
  "time_zone": {
    "id": "America/Los_Angeles",
    "current_time": "2018-03-29T07:35:08-07:00",
    "gmt_offset": -25200,
    "code": "PDT",
    "is_daylight_saving": true
  },
  "currency": {
    "code": "USD",
    "name": "US Dollar",
    "plural": "US dollars",
    "symbol": "$",
    "symbol_native": "$"
  },
  "connection": {
    "asn": 25876,
    "isp": "Los Angeles Department of Water & Power"
  },
  "security": {
    "is_proxy": false,
    "proxy_type": null,
    "is_crawler": false,
    "crawler_name": null,
    "crawler_type": null,
    "is_tor": false,
    "threat_level": "low",
    "threat_types": null
  }
}
```

## Advertise for Job/Work Contract

I am open for a good job or work contract. You can contact me directly on my email ([bera.ujjwal@hotmail.com](mailto:bera.ujjwal@hotmail.com "bera.ujjwal@hotmail.com")) or on my skype `ujjwalbera`.

## Buy me a Coffee

Hi! I'm Ujjwal Bera, I'm an open source enthusiast and devote my free time to building projects in this field.

I'm the creator and maintainer of [MNodeJs](https://github.com/beraujjwal/mnodejs/blob/main/README.md) and [SNodeJs](https://github.com/beraujjwal/snode/blob/main/README.md).

I'm doing my best to provide you a good experience when using my apps, so if you like what I'm doing and wish to say "thanks!", You can appreciate me or my hard work and time spent to create this helpful structure with buying me a coffee.

<a href="https://www.buymeacoffee.com/beraujjwalu" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Improvements requests are always welcome.

## Who do I talk to?

- [Ujjwal Bera](https://github.com/beraujjwal)

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgments

Thanks to the open-source community for inspiring and contributing to the tools used in this project.
