import React, { useEffect, useState } from "react";
import axios from "axios";

interface Meal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

export const Axios: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  return (
    <div className="content">
      {meals.map((meal) => (
        <img
          key={meal.idMeal}
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={400}
        />
      ))}
    </div>
  );
};
