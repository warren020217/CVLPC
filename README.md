# CVLPC Reservation Flow Final

## Reservation workflow
1. Player completes the reservation form.
2. A Reservation No. such as `CVLPC-20260820-1234` and an Access Code are generated.
3. The site automatically opens **My Reservation** after saving.
4. New reservations start as **PENDING**.
5. Administrator can **CONFIRM**, **DECLINE**, or later **CANCEL** a confirmed reservation.
6. Confirmed reservations are the only reservations shown publicly on the home page.
7. Players can retrieve a reservation using either the Reservation No. or Access Code.
8. Past reservations can later be marked **COMPLETED**.

## Current testing mode
This build uses browser local storage so the complete workflow can be tested without Firebase breaking the interface.

For production, connect the same data model to Firebase Authentication + Firestore. The local administrator login is for interface testing only and must not be used as production security.

## Files
All CVLPC background photos, logo, favicon, PWA icons, Firebase files, and the responsive website are included.
