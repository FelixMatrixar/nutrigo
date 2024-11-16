import React from "react";

const NutritionDisplay = ({ nutritionData, loading }) => {
  return (
    <div className="text-start pt-8 mb-6">
      {!loading ? (
        <div>
          {nutritionData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Macronutrients */}
              <div className="p-4 bg-[#FF7F2A] text-white rounded-lg shadow-md">
                <h2 className="bg-white text-black rounded-lg text-xl font-bold mb-4 p-2 text-center">
                  Macronutrients
                </h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Calories:</strong> {nutritionData.calories || 0}{" "}
                    kcal
                  </li>
                  <li>
                    <strong>Protein:</strong> {nutritionData.protein || 0} g
                  </li>
                  <li>
                    <strong>Fat:</strong> {nutritionData.fat || 0} g
                  </li>
                  <li>
                    <strong>Carbohydrates:</strong> {nutritionData.carbs || 0} g
                  </li>
                  <li>
                    <strong>Fiber:</strong> {nutritionData.fiber || 0} g
                  </li>
                </ul>
              </div>

              {/* Vitamins and Minerals */}
              <div className="p-4 bg-[#6E0D25] text-white rounded-lg shadow-md">
                <h2 className="bg-white text-black rounded-lg text-xl font-bold mb-4 p-2 text-center">
                  Vitamins and Minerals
                </h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Vitamin A:</strong> {nutritionData.vitaminA || 0}{" "}
                    AKG
                  </li>
                  <li>
                    <strong>Vitamin B1:</strong> {nutritionData.vitaminB1 || 0}{" "}
                    AKG
                  </li>
                  <li>
                    <strong>Vitamin B2:</strong> {nutritionData.vitaminB2 || 0}{" "}
                    AKG
                  </li>
                  <li>
                    <strong>Vitamin B3:</strong> {nutritionData.vitaminB3 || 0}{" "}
                    AKG
                  </li>
                  <li>
                    <strong>Vitamin B6:</strong> {nutritionData.vitaminB6 || 0}{" "}
                    AKG
                  </li>
                  <li>
                    <strong>Vitamin B12:</strong>{" "}
                    {nutritionData.vitaminB12 || 0} AKG
                  </li>
                  <li>
                    <strong>Vitamin C:</strong> {nutritionData.vitaminC || 0}{" "}
                    AKG
                  </li>
                  <li>
                    <strong>Vitamin D:</strong> {nutritionData.vitaminD || 0}{" "}
                    AKG
                  </li>
                  <li>
                    <strong>Vitamin E:</strong> {nutritionData.vitaminE || 0}{" "}
                    AKG
                  </li>
                  <li>
                    <strong>Vitamin K:</strong> {nutritionData.vitaminK || 0}{" "}
                    AKG
                  </li>
                  <li>
                    <strong>Iron:</strong> {nutritionData.iron || 0} g
                  </li>
                  <li>
                    <strong>Calcium:</strong> {nutritionData.calcium || 0} g
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-red-500 text-center">
              No data added on this date
            </p>
          )}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600">Loading Data...</p>
      )}
    </div>
  );
};

export default NutritionDisplay;
