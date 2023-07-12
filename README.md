Important Note:- Project ecmmoerce-admin already create should be runing at 
http://localhost:3000/

and this project ecpmmerce-store should be runing at 
http://localhost:3001/

Install nextjs project by follwoing command

npx create-next-app@latest --ecommerce-store --typescript --tailwind --eslint

ament global.css and layout.tsx

delete page.tsx from app folder and create new folder inside app (routes) and inside it create page.tsx
now run the project npm run dev

create components folder outside app folder

create new file footer.tsx under components folder and import it into layout

now create navbar.tsx under components folder and import it into layout folder

now create ui folder under components and under ui create new filt container.tsx and import it componet into navbar.tsx

now create new file main-nave,tsx under components folder and import its component <MainNav/> into navbar.tsx

create new folder lib in the root directory and create new file utils.tsx
install tailwindmerge and clsx
npm install clsx tailwind-merge

create new file types.tsx in the root directory and define types

now try and fetch route create .env file and copy the api from setting page and paste it into .env file

In navbar create an action which is going to call our categories in order to do that create new folder actions in the root of directory and insode it create new file get-categories.tsx


Now define types for products and in actions copy the get-categories and paste it into actions

to update page category install a package query string
npm i query-string
npm run dev

create new file product-list.tsx in the components folder and import into page.tsx


create no result components which will be reused

in components folder under UI no-results.tsx

In components folder under Ui create product-card.tsx

create mew file product.tsx inside actions folder

now create new folder under components called gallery and inside it create index.tsx file

now install npm i @headlessui/react
npm run dev

inside components create new file info.tsx

create new folder category under app inside (routes) and inside category create [categoryId] folder and insdie it create page.tsx






