# Production test log

## For all pages

| Feature | Outcome | Comments |
| ------------- | ------------- | ------------- |
| Display nav bar and logo, able to naviage between pages by clicking nav bar and logo | Passed  | No issue  |
| Display contact us section includes email and links to social media | Passed  | No issue  |
| Links to social media are working | Passed  | No issue  |
| All pages are responsive | Passed  | No issue  |

## Home and Products Page

| Feature | Outcome | Comments |
| ------------- | ------------- | ------------- |
| Display banner and shop info | Passed  | No issue  |
| Display search bar and can be used to filter product | Passed  | No issue  |
| Display product from database as a list. Each product has a image, name, price and a view details button | Passed  | No issue  |
| Click view details button will direct to the product's page with more details | Passed  | No issue  |

## Product-Detail Page

| Feature | Outcome | Comments |
| ------------- | ------------- | ------------- |
| Display product images, name, price and description | Passed  | No issue  |
| Display add to cart button | Passed  | No issue  |
| Click add to cart button will add one product to the cart | Passed  | No issue  |
| Click add to cart buttion will create a cart and stored in database | Passed  | No issue  |
| Created cartId will be stored in sessionStorage | Passed  | No issue  |

## Order History Page(Optional)

Have not developed due to time limits.

## Cart Page

| Feature | Outcome | Comments |
| ------------- | ------------- | ------------- |
| Display product in the cart with a image, name, price, quantity | Passed  | No issue  |
| Display subtotal of products which equals to their price | Passed  | No issue  |
| Display the total payable of all products | Passed  | No issue  |
| Able to delete product from cart | Passed  | No issue  |
| Display the checkout and continue shopping button | Passed  | No issue  |
| Click continue shoppping button will back to the products page  | Passed  | No issue  |
| Click checkout button will go the checkout page | Passed  | No issue  |
| If the number of quantity is 0, it will delete the product from cart automatically | Passed  | No issue  |

## Checkout Page

| Feature | Outcome | Comments |
| ------------- | ------------- | ------------- |
| Display a checkout form asking client's information | Passed  | No issue  |
| Each field will validates input data and display alert with invalid data | Passed  | No issue  |
| Display a product summary with products' name, quantity and subtotal | Passed  | No issue  |
| Display the total payable | Passed  | No issue  |
| Display a place order and a back to cart button | Passed  | No issue  |
| Click back to cart button will go back to the cart | Passed  | No issue  |
| Click place order button will direct to the confirmation page | Passed  | No issue  |
| Click place order button will create a new order and new address in database | Passed  | No issue  |

## Confirmation Page

| Feature | Outcome | Comments |
| ------------- | ------------- | ------------- |
| Display a message saying 'Your Order was received' | Passed  | No issue  |
| Display the current processing time | Passed  | No issue  |
| Display the shipping information | Passed  | No issue  |
| Display a message saying 'Thank you so much for visiting our shop' | Passed  | No issue  |

## Screenshots of website (Responsive)

* Home page (search function shown in desktop viewport)
  ![Home page](Production_screenshots/home-m.png)
  ![Home page](Production_screenshots/home-t.png)
  ![Home page](Production_screenshots/home-d.png)
  
* Products page
  ![Products page](Production_screenshots/product-m.png)
  ![Products page](Production_screenshots/product-t.png)
  ![Products page](Production_screenshots/product-d.png)

* Cart page (quantity validation shown in mobile and tablet viewports)
  ![Cart page](Production_screenshots/cart-m.png)
  ![Cart page](Production_screenshots/cart-t.png)
  ![Cart page](Production_screenshots/cart-d.png)
  
* Checkout page (input validation shown in tablet viewport)
  ![Checkout page](Production_screenshots/checkout-m.png)
  ![Checkout page](Production_screenshots/checkout-t.png)
  ![Checkout page](Production_screenshots/checkout-d.png)

* Confirmation page
  ![Confirmation page](Production_screenshots/confirmation-m.png)
  ![Confirmation page](Production_screenshots/confirmation-t.png)
  ![Confirmation page](Production_screenshots/confirmation-d.png)