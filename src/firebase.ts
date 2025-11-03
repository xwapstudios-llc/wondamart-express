import admin from "firebase-admin";

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    // databaseURL: admin.databaseUrl,
});

export const db = admin.firestore();

export const test = async (): Promise<{ status: boolean; message: string }> => {
    try {
        const userCollection = db.collection("users");
        const userDoc = userCollection.doc("test@example.com");

        // Initialize the info document.
        await userDoc.set(
            {
                id: userDoc.id,
                firstName: "Test",
                lastName: "User",
                namesUpdatedAt: admin.firestore.Timestamp.now(),
                email: "test@example.com",
                referralCode: "new-referral-code",
                referredBy: "",
                phoneNumber: "+1234567890",
                recentTransactions: [],
                createdAt: admin.firestore.Timestamp.now(),
                updatedAt: admin.firestore.Timestamp.now(),
            },
            { merge: true },
        );

        return { status: true, message: "User initialized successfully" };
    } catch (error) {
        return { status: false, message: "Error initializing user" };
    }
};
