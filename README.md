# CVLPC Rebuilt Website

## Firebase setup
1. Open Firebase Console > Project settings > Your apps.
2. Register a Web app if you have not already.
3. Copy the Web App `firebaseConfig` values into `firebase-config.js`.
4. Enable Authentication > Sign-in method > Email/Password.
5. Create the administrator user under Authentication > Users.
6. Copy that user's UID.
7. In Firestore, create collection `admins`. Create a document whose ID is exactly the administrator UID and add `active` as Boolean `true`.
8. Publish the included `firestore.rules`.

## Important status names
Use exactly: Pending, Confirmed, Declined, Cancelled, Completed.

## Deployment
Upload the contents of this folder to the GitHub repository root. Vercel can deploy it as a static site.

## What was fixed
- Background slideshow runs independently of Firebase.
- Buttons and navigation run even if Firebase configuration is missing.
- Transparent PNG CVLPC logo is used in the header and hero.
- Mobile menu and modals work without Firebase.
- Reservation flow uses Pending -> Confirmed/Declined.
- Admin list does not require an orderBy index.
- Public board shows only Confirmed reservations.
