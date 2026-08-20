# CVLPC Clean Responsive Website

## What was fixed

- The **new transparent `logo-CVLPC.png`** is used everywhere.
- The same logo is used as `favicon.ico`, 192px icon, 512px icon, header logo, and hero logo.
- The five real CVLPC photos are local files and rotate every **7 seconds**.
- Background rotation uses two cross-fading layers, so the image actually changes smoothly on mobile and desktop.
- All navigation, mobile menu, reservation, My Reservations, admin login, refresh, approve, reject, and close buttons use explicit event listeners.
- The old JavaScript problem caused by relying on HTML IDs as global variables has been removed.
- If Firebase is configured, reservations use Firestore.
- If Firebase is not configured yet, the site falls back to browser local storage so the interface and buttons can still be tested.

## Firebase

Replace the values in `firebase-config.js` with the Firebase Web App configuration.

Enable:
1. Authentication > Sign-in method > Email/Password
2. Firestore Database

Create an administrator:
1. Create the administrator account in Firebase Authentication.
2. Copy that user's UID.
3. Firestore > create collection `admins`.
4. Create a document whose ID is the administrator UID.
5. Add:
   - `active: true`
   - `role: "admin"`

Deploy the included `firestore.rules`.

## Vercel

Upload all files in this folder to GitHub and import the repository into Vercel.

No build command is required. The site is a static HTML/CSS/JS application.

## Important

The local-storage fallback is only for testing. For the public production site, use Firebase so all players and administrators share the same reservation data.
