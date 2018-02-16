## Getting Started

If you haven't already done so, [sign up](https://auth0.com) for your free Auth0 account and create a new client in the [dashboard](https://manage.auth0.com).

Clone the repo or download it from the Express API quickstart page in Auth0's documentation.

## Setup the `.env` File

If you download this sample from the Express API quickstart page, a `.env` file will come pre-populated with your API identifier and Auth0 domain. If you clone the repo from GitHub, you will need to rename `.env.example` to `.env` and provide these values manually.

## Install the Dependencies and Start the API

```bash
npm install
npm start
```

The API will be served at `http://localhost:3010`.

## Endpoints

The sample includes these endpoints:

**GET** /api/public
* An unprotected endpoint which returns a message on success. Does not require a valid JWT access token.

**GET** /api/private
* A protected endpoint which returns a message on success. Requires a valid JWT access token with a `scope` of `read:messages`.

## Running the Sample With Docker

In order to run the example with docker you need to have `docker` installed.

You also need to set the client credentials as explained [previously](#setup-the-env-file).

Execute in command line `sh exec.sh` to run the Docker in Linux, or `.\exec.ps1` to run the Docker in Windows.
