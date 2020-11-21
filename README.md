# Notable App

Notable App is an API designed for physicians and their appointments. It is an [`express`](https://expressjs.com/)-based API that stores physicians and appointments.

Data persistence is through a JSON-powered database called [`lowdb`](https://github.com/typicode/lowdb).

### Requirements

* Node v10.15.x
* npm v6

### Setup

Install dependencies in `client` and `api` with:

```sh
npm install
```

### Running

To run the application:

```sh
cd client
npm run start
```


```sh
cd api
npm run start
```
or for auto-refresh
```sh
npm run watch
```

You should see a message that the application has started:

```sh
Notable app listening at http://localhost:9000
```
```sh
You can now view notable in the browser.

  Local:            http://localhost:3000
```

You can manually use the application using `curl`:

```sh
# GET all physicians
curl http://localhost:9000/physicians

# GET all appointments by phyiscian ID
curl http://localhost:8000/appointments/a2
```
