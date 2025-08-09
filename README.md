# Product UI

Product Listing interface for e-commerce apps or websites.
Provides variant selection, add-to-cart, and visual inventory check features.
---

## Preview
![Product UI Preview](https://github.com/harun-alrosyid/hustlr-staffing-product-ui/blob/main/ProductUI.jpg)

---

## Feature

### 1. **Product List**
- Displays product images, names, and prices.
- Dropdown menu for selecting variants (size or color).
- The **Add to Cart** button is active if stock is available.
- The **Out of Stock** button is disabled if stock is depleted..

### 2. **Cart System**
- The cart icon in the header displays the number of items.
- Products are added to the cart based on the selected variant.
- The cart can be managed using state management (the Context API).

### 3. **Product Variant Selector**
- Dropdown to select a variant.
- The default value is the first variant.

### 4. **Stock Handling**
- Out of stock → **Out of Stock** button is disabled.
- Empty products.

---

## How to Use

1. **Select Variant**
- Use the dropdown to select the product size or color.
  
![elect Variant](https://github.com/harun-alrosyid/hustlr-staffing-product-ui/blob/main/variant.jpg)

1. **Add to Cart**
- Click **Add to Cart** after selecting a variant.
- The product will be added directly to your cart.
  
![Add to Car](https://github.com/harun-alrosyid/hustlr-staffing-product-ui/blob/main/AddCart.jpg)

1. **View Cart**
- Click the cart icon in the header to see a list of selected products.
  
![View Cart](https://github.com/harun-alrosyid/hustlr-staffing-product-ui/blob/main/ViewCart.jpg)

---


## Tech
- **Frontend**: React.js / Vite
- **Styling**: Tailwind CSS
- **State Management**:  Context API
- **Data**: Static JSON

---

## 📦 Instalasi & Menjalankan
```bash
# Clone repo
git clone https://github.com/harun-alrosyid/hustlr-staffing-product-ui.git

cd hustlr-staffing-product-ui

# Install dependencies
npm install

# run
npm start dev
```
