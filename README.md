# CVLPC Rebuilt Website

Camp Vicente Lim Pickleball Club reservation website for desktop and mobile.

## Reservation workflow

Player:
1. Submit name, email, contact number, date, time and number of players.
2. A unique 8-character access code is generated.
3. Reservation is saved as **Pending**.
4. The player is taken to **My Reservation** using the access code.

Administrator:
1. Sign in using Firebase Email/Password.
2. Review pending reservations.
3. Click **CONFIRM** or **DECLINE**.
4. The public booking board updates automatically.

Public booking board:
- Shows **PENDING** and **CONFIRMED** bookings.
- Does not expose player name, email or phone number.
- Declined, cancelled and completed bookings are not displayed publicly.

## Firebase setup

1. Firebase Console > Project settings > Your apps.
2. Copy the Firebase Web configuration into `firebase-config.js`.
3. Authentication > Sign-in method > enable **Email/Password**.
4. Authentication > Users > create the administrator account.
5. Copy the administrator user's UID.
6. Firestore > create collection `admins`.
7. Create a document whose ID is exactly the administrator UID.
8. Add:
   - `active` = Boolean `true`
9. Replace Firestore Rules with the included `firestore.rules`.
10. Click **Publish** in Firebase Rules.

## Important

The `firestore.rules` file in GitHub does not automatically change Firebase Security Rules just because Vercel redeploys the website. The rules must be published in Firebase Console, or deployed using the Firebase CLI.

## Deployment

Upload the contents of this folder to the GitHub repository root and let Vercel deploy it.

## Assets

- `logo-CVLPC.png` is used for the header and hero.
- `favicon.ico` is used as the browser icon.
- `icon-192.png` and `icon-512.png` are used for PWA installation.
- `cvlpc-bg-1.jpg` through `cvlpc-bg-5.jpg` are used by the automatic background slideshow.

The background slideshow runs independently of Firebase.
