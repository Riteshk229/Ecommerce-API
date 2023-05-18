# Ecommerce-API

   An E-commerce REST API created using Node.js, Express.js and MongoDB for Admin to manage his product inventory. It has functionality     like:

  1. View Inventory 
  2. Create Products
  3. Delete Product
  4. Update Quantity of Products

## Setup

   After cloning, use "npm install" and serve the app using "node server". The example provided here are from Postman.

    localhost:3000/api/v1 
    
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/44f43653-f804-4923-a301-a24feee81540)

## 1. View Inventory 

   Admin can view all the products available in inventory and sending a `GET` request.
   
    /products
    
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/89e60dcc-b9ea-4a98-8ed6-2558d5ee8137)

   ### Response

   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/cb291603-3e62-41af-9785-4649cc093c50)


## 2. Create Products
   Admin can enter new products by specifying the name and quantity in form  and sending a `POST` request.

    /products/create
   
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/934e0d46-02e3-4dee-ba1d-b8ab670c8953)
    
   ## Response
   
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/570738a3-a514-454c-a542-3e8d15824a65)
   
## 3. Delete Products
  
   Admin can delete products by passing the the product id and sending a `DELETE` request.
  
      /products/:id
    
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/a536195d-8a62-4bae-8066-71cddd412c70)
   
   ### Response
   
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/ab18a932-7ba0-4ce7-9f12-03828a13d85a)

## 4. Update Products

   Admin can update  the quantity of a product by passing the product id and the quantity by which the product may be incremented or        decremented by and sending a `post` Request.
   
    /products/:id/update_quantity/?number=100
    
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/a244aa5f-0d84-49b6-9a05-48ae70370204)
   
   ### Response
   
   ![image](https://github.com/Riteshk229/Ecommerce-API/assets/100128015/c337fd29-1dfa-4341-90d8-88a818ed02dc)


