// src/services/nutritionService.js
import { doc, setDoc } from 'firebase/firestore';
import { auth, db as firestore } from '../firebase'; // Adjust the path to your Firebase config file

/**
 * Function to add daily nutrition data for a user
 * @param {string} date - The date in YYYY-MM-DD format
 * @param {Object} nutritionData - Nutrition data for the day
 * @returns {Promise<void>}
 */
export const addDailyNutritionData = async (date, nutritionData) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("No authenticated user found");
    return;
  }

  try {
    const nutritionDocRef = doc(firestore, `users/${user.uid}/nutritionData/${date}`);
    await setDoc(nutritionDocRef, nutritionData, { merge: true });
    console.log(`Nutrition data for ${date} added successfully`);
  } catch (error) {
    console.error("Error adding daily nutrition data:", error);
  }
};
