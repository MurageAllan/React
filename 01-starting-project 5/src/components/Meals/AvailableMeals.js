import React from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";

// An array of available meals.
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani ",
    description: "Rice , biryani swahili dish",
    price: 500.99,
  },
  {
    id: "m2",
    name: "Pilau",
    description: "Pilau , beef yummy!",
    price: 400.5,
  },
  {
    id: "m3",
    name: "Ugali fish",
    description: "Luos' favourite fresh from L.Victoria",
    price: 600.99,
  },
  {
    id: "m4",
    name: "Chapatti chicken",
    description: "Healthy kienyeji chicken ...and greens...",
    price: 700.99,
  },
];

// This function outputs a list of all the meals dynamically.
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
