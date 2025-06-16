First step was creating a React front end using TypeScript

initial command was:
>npm create vite@latest met-museum -- --template react-ts

Then I installed things I am familiar with my work at JPMC
-zod for Schemas (if needed, which it turns out I didn't)
-react-query for the API calls
-clsx for doing styles
-Material UI Grid is from my previous job, the library I use
 for Grid and Flex is proprietary to JPMC

>npm install zod @tanstack/react-query clsx @mui/material

For the styled CSS in DEV I installed
>npm install -D sass-embedded

For the API fetches in my hooks, I also needed to add Axios (I forgot that we have a custom fetch library at work
 that works with React-query)
>npm install axios - unfortunately this does not catch errors as I am accustomeed to the "wrong ID" - the API returns
 a 404 for an invalid ID - I could not catch that error.

My focus was on functionality and not visuals
1 - I created a Tabbed layout with the Paginated List as the default active and the 3 Search By categories as not active.
2 - You select the appropriate tab to see what you want to see
    a - The "Search By" pages start with a Modal to input what you are looking for
    b - For ID, you get a single returned entry
    c - for Title and Department, you get a paginated list on the left to choose from
    d - the output is just the object turned into a raw key-value pair list
3 - There are a number of issues that would need to be cleaned up as you navigate across, but the basic functionality it there
4 - I originally wanted to make it mobile responsive but 2 things:
    a - I ran out of time
    b - More importantly, the search and then select to view functionality would look very different in mobile, 
        likely a modal popping up when you select something to see the details, not enough real estate to see the choice
        of objects and then the details of the selected item visible at the same time.
5 - Lots of CSS issues as you navigate but the time constraint made it unreasonable to fix. 

Thanks for the oppurtunity

Jaime Romero

