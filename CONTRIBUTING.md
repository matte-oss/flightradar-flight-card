# Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Development

### Prerequisites

- Node.js 22+
- npm
- Docker (for running the development Home Assistant instance)

### Setup

```bash
# Clone the repository
git clone https://github.com/plckr/flightradar-flight-card.git
cd flightradar-flight-card

# Install dependencies
npm install

# Start development webserver
npm run start
```

### Development with Home Assistant

Repository includes a Docker-based Home Assistant instance for testing your card in real-time. It is predefined with the FlightRadar24 custom_component and some default entities to work with the testing.

```bash
# Start Home Assistant Beta
npm run start:hass

# Or start with the stable version
npm run start:hass-stable
```

Once running:

1. Open http://localhost:8123 in your browser
2. Complete the Home Assistant onboarding (first time only)
3. Navigate to the dashboard to see your card
4. Changes to your code will automatically rebuild, just refresh the browser

The `.hass_dev` folder contains the volume that Home Assistant docker will read.

### Available Scripts

There are a couple of scripts available, feel free to look at the scripts section in the [package.json](./package.json)

### Manual Testing in Home Assistant

If you prefer to test in your own Home Assistant instance:

1. Build the card: `npm run build`
2. Copy `dist/flightradar-flight-card.js` to your Home Assistant `config/www` folder
3. Add the resource in Home Assistant (see Manual Installation in README)
4. Add the card to a dashboard

### Creating a Release

This project uses [release-it](https://github.com/release-it/release-it) for automated releases:

```bash
npm run release
```

## Custom component FlightRadar24

There's no HACS in the Home Assistant docker container, to update the local FlightRadar24 custom component, run:

```
npm run update-flightradar24-integration
```

This will grab the latest release of the component and insert in the repository.

## Airline ICAO

Package relies on airline icao list to map the ICAO to the airline name, it's stored in file [airline-icao-list.json](./src/utils/airline-icao-list.json).

Here is an [online list](https://www.flightradar24.com/data/airlines) for all available airlines.

To update, I recommend using this package: [FlightRadarAPI](https://github.com/JeanExtreme002/FlightRadarAPI)

It also stores airline icons inside public directory, code will check if it has a logo to display it.
