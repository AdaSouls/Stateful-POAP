# AdaSouls: Stateful POAPs Indexer
 
This documentation provides a basic overview of what are Stateful POAPs and how its indexer works. Each module has its own `README` file with more detailed information.

## Installation

To install dependencies and perform initial setup, run the following command:

```
npm run initialize
```

This does the following:

- install dependencies of this template
- copies `.env.example` as `.env.localhost` to the parent folder

Additionally to other templates it does one more thing

- copies `extensions.yml` example to the parent folder

### MacOS specific

If you're using Mac and run into installation issues you can add `--target=esbuild-darwin-arm64` as a workaround to `npm install`. This installs the correct version of a problematic package. For example:

```
npm install --save-dev esbuild@latest --target=esbuild-darwin-arm64
```

## Building

To compile the Indexer into `endpoints` and `gameCode` entrypoints used by Paima Engine, to regenerate all `tsoa` routes (reflect changes in the `API`) and to start the `pgtyped` watcher process (if there are any changes to the DB schema or queries), use the following command:

```
npm run reset
```

This build ran all the Paima Engine internal commands to build everything we need.

## Prerequisites

Ensure that the `paima-engine-{linux|mac}` executable is located in the parent directory of this project. The directory structure should be as follows:

```
this-template
../paima-engine-linux
../.env
../extensions.yml
```

## Environment Setup

Config file `.env.localhost` is created during `npm run initialize` in the parent folder, based on `.env.example` in this project. This is an empty file that you need to fill in with your specific values, before running Paima Engine.

Feel free to use examples written in the file for initial testing.

## Database Setup

To speed up the development cycle you can at any time completely reset the database and start syncing from the latest blockheight. Run this command, that will modify your `.env.localhost` and `docker-compose.yml` files:

```
npm run database:reset
```

To start the database, run the command:

```
npm run database:up
```

## Run the Indexer

To run the Stateful POAPs Indexer, follow these steps:

1. Change to the parent directory where the packaged folder was generated:

```
cd ..
```

2. Execute the following command:

```
./paima-engine-linux run
```

You can set the `NETWORK` variable if you want to load a custom config for your Game Node. For example to load `.env.testnet` use:

```
NETWORK=testnet ./paima-engine-linux run
```

## Paimage Engine Documentation

If you've got this far you're probably already familiar with our documentation. But if you need to refresh your knowledge you can copy the documentation files to your file system by using the standalone CLI command:

```
./paima-engine-linux docs
```

Or you can visit our [Paima Documentation Website](docs.paimastudios.com) at any time.
