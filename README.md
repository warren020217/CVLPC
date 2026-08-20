# Camp Vicente Lim Pickleball Club - CVLPC

Responsive reservation website prepared for GitHub + Vercel + Firebase.

## Stack
- Static responsive HTML/CSS/JavaScript
- Firebase Authentication for administrator login
- Cloud Firestore for reservations
- Vercel for hosting
- GitHub for source control

## Design
- CVLPC logo supplied by the club
- Five supplied club photos rotate every 7 seconds
- Background image layer is 30% opacity
- Desktop navigation and four-column action cards
- Mobile hamburger menu and stacked cards

## Reservation flow
1. Player enters name, email, contact number, date, time, and number of players.
2. Reservation is stored in Firestore as Pending.
3. Admin signs in using Firebase Email/Password Authentication.
4. Admin approves or rejects.
5. Approved reservations appear in the public approved-bookings view.
6. Player can use the 8-character reservation access code to view the status of their booking. The access code is also the Firestore document ID, so a player does not need a separate account or password.

## Firebase setup
1. Create a Firebase project.
2. Register a Web App.
3. Enable Authentication > Email/Password.
4. Create Firestore Database.
5. Paste the Firebase Web App config into `firebase-config.js`.
6. Publish `firestore.rules`.
7. Create an admin account in Firebase Authentication.
8. In Firestore create `admins/{ADMIN_UID}` with:
   `{ "active": true, "role": "admin" }`
9. Deploy this folder to GitHub and connect the repository to Vercel.

## Important
The Firebase web config can be in the frontend. Do not put service-account keys or passwords in the repository. Firestore Security Rules control access.

## Existing Google Sheet
The previous Google Sheet can remain as an administrative/reporting source, but this production build uses Firestore as the live reservation database so Vercel and Firebase work together cleanly. If you want, a later Cloud Function/App Script sync can mirror approved reservations to the Sheet.
