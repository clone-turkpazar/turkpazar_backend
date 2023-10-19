## Development

- Install NodeJS 16.20.0.
- Install yarn.
  ```bash
  npm i -g yarn
  ```
- Install node modules.
  ```bash
  yarn
  ```
- Run application.
  ```bash
  yarn dev:start
  ```

## Production with Docker

- Install Docker.
  - On Windows 10 install `Docker Desktop v4.20.1`.
  - On Linux install `docker.io` and `docker-compose`.
    ```bash
    sudo apt update
    sudo apt install docker.io
    sudo apt install docker-compose
    ```
- Start container.
  ```bash
  docker-compose up
  ```

## Production with cPanel

- Install NodeJS 16.20.0.
- Install yarn.
  ```bash
  npm i -g yarn
  ```
- Install node modules.
  ```bash
  yarn
  ```
- Build project.
  ```bash
  yarn build
  ```
- To zip folder `node_modules` to `node_modules__YYYY-MM-DD_HH-MM.zip`.
- To zip all files, exclude folder `node_modules` and `.git`, to `turkpazar_backend_YYYY-MM-DD_HH-MM.zip`.
- Open `cPanel`.
  - Open `File Manager` on cPanel.
    - Create folder `turkpazar_backend`.
    - Upload and unzip `node_modules__YYYY-MM-DD_HH-MM.zip`.
    - Upload and unzip `turkpazar_backend_YYYY-MM-DD_HH-MM.zip`.
- Open `cPanel`.
  - Click `Setup Node.js App`.
    - Click `CREATE APPLICATION` button.
      - Node.js version: `16.20.1`.
      - Application mode: `Production`.
      - Application root: `turkpazar_backend`.
      - Application URL: `api/turkpazar`.
      - Application startup file: `dist/main.js`.
      - Passenger log file: `turkpazar_backend/logs/passenger.log`.
    - Click `CREATE` button.
