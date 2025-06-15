First step was creating a React front end using TypeScript

initial command was:
>npm create vite@latest met-museum -- --template react-ts

Then I installed things I am familiar with in my work at JPMC
zod for Schemas (if needed, which it turns out I didn't)
react-query for the API calls
clsx for doing styles
Material UI Grid

>npm install zod @tanstack/react-query clsx @mui/material @mui/system

For the styled CSS in DEV I installed
>npm install -D sass-embedded

For the API fetches in my hooks, I also needed to add Axios (I forgot that we have a custom fetch library at work that works with React-query)
>npm install axios

My focus was on functionality and not visuals
I created a Tabbed layout with the Paginated List as the default active and the 3 Search By categories as not active. 


# met-museum
