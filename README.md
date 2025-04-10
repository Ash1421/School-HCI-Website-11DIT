# Welcome to my website

This website is designed to educate its users about the city of Cologne.

**This is an ongoing project and is** [![Stage](https://img.shields.io/badge/Development-Under_Development-yellow)](https://shields.io. )

This project is open source, so you are free to fork it, modify it, and use it as you want. You can also use it as a learning tool or as a template to make your own website.

**I will try to describe the finished code as good as i can, feel free to learn from it.**
## Versioning Information  

This project uses semantic versioning to indicate changes:

- **Major changes** (e.g., UI revamp or significant additions) increment the first number.
- **Minor changes** (e.g., small adjustments or additional content) increment the second number.
- **Bug fixes** increment the third number.

For instance:
- `V1.0.0` indicates a major change.
- `V0.1.0` indicates a minor change.
- `V0.0.1` indicates a bug fix.

The project starts at `V1.0.0`, reflecting a stable base with plans for further enhancements and testing.

## The current version for the project is
 [![Version](https://img.shields.io/badge/Version-3.15.32-informational)](https://shields.io)

## Docker Setup

To set up the project using Docker, follow these steps:

1. Download the latest release from GitHub.
2. Build and start the Docker container with Docker Compose:

   ```bash
   docker-compose up --build -d
   ```

Alternatively, you can start the container using Docker, it is recommended that you use docker compose to build and start the container:

   ```bash
   docker run -d -p 57854:80 --name koln-container koln-site
   ```

The site will be accessible at:  
[http://localhost:57854](http://localhost:57854)

**Please note if you are hosting it on a remote machine you will need to chage the ip from localhost, or port forward to access the site.**


# License

- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<i class="fa fa-copyright" aria-hidden="true"></i> This project is licensed under the [MIT LICENSE](LICENSE).