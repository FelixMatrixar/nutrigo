import React from "react";
import Intro1 from "../asset/trans_nutritiontracker.png";
import Intro2 from "../asset/trans_autodiagnosis.png";
import Intro3 from "../asset/trans_recommendsystem.png";

const Intro = () => {
  return (
    <div className="md:text-start text-center bg-[#84A98C] text-white py-8">
      {/* Main Title */}
      <h1 className="italic font-bold text-6xl p-4 text-[#0C4767]">
        What Do We Do?
      </h1>

      {/* Sections */}
      <div className="flex flex-col md:flex-row justify-between p-8 text-center">
        <div className="flex-1 px-4 py-4">
          <img
            src={Intro1}
            className="w-250 h-auto mx-auto mt-8"
            alt="nutritracker"
          />
          {/* <h2 className="text-3xl font-bold text-[#FCDDF2]">
            Nutrition Tracker
          </h2> */}
          <p className="mt-4 text-[#FCDDF2] text-xl font-semibold">
            Pencatatan asupan harian cukup dengan mengirimkan foto makanan
            melalui Whatsapp.
            <br />
            <br />
            Daily intake tracking is as simple as sending a photo of food
            through WhatsApp.
          </p>
        </div>

        <div className="flex-1 px-4 py-4">
          <img
            src={Intro2}
            className="w-250 h-auto mx-auto mt-8"
            alt="nutritracker"
          />
          {/* <h2 className="text-3xl font-bold text-[#FCDDF2]">
            Automatic Diagnosis
          </h2> */}
          <p className="mt-4 text-[#FCDDF2] text-xl font-semibold">
            Diagnosis kecukupan asupan sehari-hari berdasarkan kalori,
            makronutrien, dan mikronutrien secara otomatis.
            <br />
            <br />
            Automatic diagnosis of daily intake adequacy based on calories,
            macronutrients, and micronutrients.
          </p>
        </div>

        <div className="flex-1 px-4 py-4">
          <img
            src={Intro3}
            className="w-250 h-auto mx-auto mt-8"
            alt="nutritracker"
          />
          {/* <h2 className="text-3xl font-bold text-[#FCDDF2]">
            Recommendation System
          </h2> */}
          <p className="mt-4 text-[#FCDDF2] text-xl font-semibold">
            Sistem rekomendasi produk suplemen yang dipersonalisasi kepada
            pengguna yang kekurangan asupan mikronutrien.
            <br />
            <br />A personalized supplement product recommendation system for
            users with micronutrient deficiencies.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <h2 className="italic font-light text-6xl p-16 text-center text-[#0C4767]">
        Ready to Eat Smarter? Let’s Go!
      </h2>
    </div>
  );
};

export default Intro;
