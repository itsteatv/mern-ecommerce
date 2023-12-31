# eCommerce API

Simple Express-based API for an eCommerce application.

## Getting Started


### Prerequisites
Before running the application, make sure you have the following installed:

- Node.js
- npm
- MongoDB (and have it running)

### Installation

1. Clone the repository
```bash
git clone https://github.com/amirhosseinforouhar/ecommerce-api.git
cd ecommerce-api
```
2. Install dependencies
```bash
npm install

```

3. Create a `.env` file in the root directory and set the following environment variables

```dotenv
PORT=5000
MONGO_CONNECTION_URI=yourConnectionURI
SECRET_KEY=yourSecretKey

```

4. Run the application
```bash
npm start

```
### Endpoints

- `GET /api/v1/products?company=marcos&search=chair&sort=name&fields=name price `
- `GET /api/v1/products/:id`