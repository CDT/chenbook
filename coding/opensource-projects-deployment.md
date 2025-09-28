# Open Source Projects Deployment

## Docker

### `/etc/docker/daemon.json`

``` json
{
  "registry-mirrors": [
    "https://docker.m.daocloud.io",
    "https://docker.1panel.live",
    "https://hub.rat.dev"
  ]
}
```

## Fider

### Docker compose

- 我在`192.168.246.80`的例子：

``` yml
version: '3.8'

services:
  db:
    restart: always
    image: postgres:17
    volumes:
      - /var/fider/pg_data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: fider
      POSTGRES_PASSWORD: s0m3g00dp4ssw0rd
      POSTGRES_DB: fider  # Ensure the database is created

  app:
    restart: always
    image: getfider/fider:stable
    ports:
      - "80:3000"  # Make sure port 80 is free on your host
    environment:
      # Public URL to access Fider
      BASE_URL: http://192.168.246.80

      # PostgreSQL connection string
      DATABASE_URL: postgres://fider:s0m3g00dp4ssw0rd@db:5432/fider?sslmode=disable

      # JWT secret — generate securely in production!
      JWT_SECRET: VERY_STRONG_SECRET_86915998

      # Email sender and SMTP config
      EMAIL_NOREPLY: chendongtian@tjh.tjmu.edu.cn
      EMAIL_SMTP_HOST: smtphz.qiye.163.com
      EMAIL_SMTP_PORT: 587
      EMAIL_SMTP_USERNAME: chendongtian@tjh.tjmu.edu.cn
      EMAIL_SMTP_PASSWORD: k3Cwb1qtBQKBEXXu
      EMAIL_SMTP_ENABLE_STARTTLS: 'true'
      EMAIL_SMTP_ENABLE_SSL: 'false'
    depends_on:
      - db
```