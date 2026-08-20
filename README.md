# CVLPC Final Stable Version

This version was rebuilt to fix the two problems visible in the previous deployment.

## Fixed
- Five supplied CVLPC photos rotate every 7 seconds.
- Background is implemented with real `<img>` layers rather than CSS background-image swapping.
- Background opacity is 30%.
- New `logo-CVLPC.png` is used as the header logo, hero logo, favicon and mobile icons.
- Navigation and buttons are independent of Firebase loading.
- Reservation, My Reservations, Admin Login, Approve, Reject, Refresh and mobile navigation work immediately for testing.
- Reservations are stored in browser local storage in this standalone test version.

## Before production
Connect the reservation engine to Firebase Firestore and Firebase Authentication. Do not use the local admin test login as a production security mechanism.

Upload every file to GitHub and let Vercel redeploy.
