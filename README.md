Creating a social event management website with the mentioned features involves a combination of front-end and back-end development, as well as user authentication.

The Website can be accessed here : https://starlit-narwhal-c16877.netlify.app/
 
Here's a high-level overview of the steps one can take to implement these features:

1. Front-End Structure:
   - Design the home page with a navigation bar, banner/slider, services section, and footer. Implement active routes on the navigation bar to highlight the current page.

2. Services Section:
   - Create a Services section with at least 6 event services, each displaying a relevant name, image, price, short description, and a specific button. Implement routing to service detail pages, where users can view detailed information about each service.

3. Authentication:
   - Implement email and password-based authentication using a service like Firebase Authentication. Create registration and login pages that allow users to toggle between the two views. Display error messages for password requirements, mismatched passwords, and invalid email addresses. Add an additional login method (e.g., social login via Google or Facebook).

4. Private Routes and User Profile:
   - Protect private routes, such as service detail pages, to redirect unauthorized users to the login page. Once logged in, display the user's name, profile picture, and a logout button in the header. Implement a logout functionality that logs the user out and redirects them to the login page.

5. Additional Private Routes:
   - Create two more private routes relevant to your website, such as an "Event Booking" page and a "User Dashboard."
