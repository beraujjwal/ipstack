## Global Timezones

** global-timezones ** is a robust npm package that provides comprehensive information about time zones, including detailed Daylight Saving Time (DST) data. This package is designed to help developers easily access accurate and up-to-date time zone information for various applications such as scheduling, logging, and global event planning.

## Features

- **Comprehensive Time Zone Data**: Access detailed information about time zones worldwide, including offset, standard time, and DST transitions.
- **Daylight Saving Time Information**: Get precise DST start and end dates, along with the amount of time shifted.
- **Structured Format**: Data is well-organized and easy to navigate, ensuring seamless integration into your projects.
- **Up-to-Date Information**: Regularly updated to reflect the latest geographical changes and new entries.
- **TypeScript Support**: Fully typed definitions for TypeScript users, providing a better development experience and reducing errors.
- **Easy to Use**: Simple API that makes it easy to fetch and utilize time zone data in your projects.

# Install

`npm i global-timezones`

# Usage

- ES6 Module usage

  ```js
  import { Timezone, ITimeZone } from "global-timezones";
  ```

# Docs

## Timezone Request method

Here are all timezone related methods.

#### Region.getAllTimezones()

#### Region.sortedTimezones(field)

Here field can be id or name. and sort always will be ascending

#### Region.getFiltedTimezones(field, value, sort)

Here field can be id or name. value will be the value you are looking for. and sort always will be ascending

# Example structure data

type: **json | ITimeZone**

```js
[
  {
    "id": 4,
    "tzCode": "America/Adak",
    "area": "Adak",
    "gmt": "(GMT-10:00)",
    "utc": "-10:00",
    "dst": null
  },
  ...
]
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
