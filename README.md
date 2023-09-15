# Course Roster

# Questions

## Add at least 3 Project features

### Answer:

- Add Courses in Cart
- See Total and Remaining Credit hour
- See Name of the Courses in Cart

## Discuss how you managed the state in your assignment project.

## Answer:

- I have Four states
- One is 'courses,' which holds all the fetched courses from the API
- Another is the 'remaining' state, which holds the calculation of remaining credit hours
- The last one is 'selectedCourses,' responsible for holding the user's selected courses, and 'totalCredit,' which calculates the total credit hours.
- I then pass these states as props to the 'courses' and 'course' components. Additionally, I pass the 'remaining,' 'selectedCourses,' and 'totalCredit' states as props to the 'cart' component.
- In the 'course' component, I perform all the required operations and update the states accordingly.
