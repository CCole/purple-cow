## Future Updates
- Figure out how to set up prettier configuration so that it does not conflict with vercel deployemnt
  - Prettier is important because it scans files for style issues and automatically reformats code for consistency. It's nice because it's a one time cost and an help catch errors.

- Add more informative error messages for improved user experience
- Implement a responsive design for a delightful experience across devices

## Implementation Details 
- The use of action creators and the reducer pattern creates a transactional application state decoupled from side effects, ensuring deterministic state reproduction.
- In the future if the app's state needs to be persisted or shared with additional components then there is a single source of truth.
