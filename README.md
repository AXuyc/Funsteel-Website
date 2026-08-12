# Funsteel Website

A lightweight static website for Funsteel, a branch company of Chongqing Fenglin built to present the company overview, product catalog, contact information, and privacy policy. The goal of the website is to attract foreign customers and allow them to browse our catalogue of products.

## Project Overview

This repository contains a simple front-end website with static HTML pages with navbar and small JavaScript-driven interactions for product listings and detail views

## Main Entry Points

- `index.html` — landing page of website and contains a hero section and a product carousel
- `products.html` — product catalogue page that renders data from the JavaScript product catalogue
- `about-us.html` — company background and mission
- `contact-us.html` — contact details and location information
- `privacy-policy.html` — privacy policy page

## Repository Structure

- `assets/` — site images and static media assets
- `css/style.css` — shared styling for all pages
- `js/main.js` — page initialization, render logic, and dynamic product interactions
- `js/products.js` — product data source used by the catalogue and detail pages

## How the Product Pages Work

- `js/products.js` exports a `PRODUCTS` array containing product metadata, images, specs, and origin information.
- `js/main.js` reads that catalogue and renders:
  - the featured product slider on the homepage
  - the product grid on the products page
  - detail content when a product hash is selected in the URL using renderProductFromHash function

## Styling Notes

- Shared layout and component styling are defined in `css/style.css`.
- Global page styling such as navigation, hero content, product cards, and detail tables is kept in one stylesheet for consistency.

## Running the Site

Because the site is static, you can open the HTML files directly in a browser or serve the project using any simple local web server.

## Notes for Future Readers

- The site is intentionally static and does not use a framework or backend.
- Most behaviour is driven by `js/main.js` and the structured product data in `js/products.js`.
- If you need to update the product catalogue, edit `js/products.js`.
- If you need to change layout or global presentation, edit `css/style.css`.

