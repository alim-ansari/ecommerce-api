# Ecommerce API

### Set Environmental variables in /.env

```
JWT_SECRET="secretkey"<br />
PORT=3000<br />
MONGODB_URL="< insert mongodb url string >"<br />
```

### Installation

1. Git Clone the Repo

2. Install dependencies 
```npm install```

3. Run dev server
```npm run dev```

4. Run tests
```npm test```

5. Run production
```npm start```

### API Documentation

#### 1. Create User

POST /users

```json
{
    "name": "alim",
    "email": "mailid@alimansari.com",
    "password": "12345678",
}
```
---
#### 2. Login User

POST /users/login

```json
{
    "email": "contact@alimansari.com",
    "password": "12345678",
}
```
---
#### 3. Add Product to Store

POST /items <br/>
HEADERS Authorization:"Bearer < token >" 

```json
{
    "name": "Item 1",
    "description": "Good Item 1",
    "stock": "20",
    "price": 220,
}
```
---
#### 4. Get a Product in Store

GET /items/:id <br/>
HEADERS Authorization:"Bearer < token >"

---

#### 5. Get All Products in Store

GET /items <br/>
HEADERS Authorization:"Bearer < token >"

---
#### 6. Udpate a Product in Store

PATCH /items/:id <br/>
HEADERS Authorization:"Bearer < token >" 

```json
{
    "name": "Item Updated",
    "description": "Good Item Updated",
    "stock": "19",
    "price": 230,
}
```
---
#### 7. Delete an Item in Store

DELETE /items/:id <br/>
HEADERS Authorization:"Bearer < token >" 

---
#### 8. Logout User

POST /users/logout <br/>
HEADERS Authorization:"Bearer < token >" 

```json
  {}
```



