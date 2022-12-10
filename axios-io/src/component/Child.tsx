import axios from 'axios';
import { useEffect, useState } from 'react';

export const Child = () => {
  const getAnimalInfo = async () => {
    return await axios.get('http://localhost:3000/api/animal');
  };

  const getFoodInfo = async () => {
    return await axios.get('http://localhost:3000/api/food');
  };

  const getAllInfo = async () => {
    const animalInfo = await getAnimalInfo();
    const foodInfo = await getFoodInfo();

    const allInfo = {
      animalName: animalInfo.data.animalName,
      age: animalInfo.data.age,
      foodlName: foodInfo.data.foodName,
      foodName: foodInfo.data.taste,
    };

    console.log('allInfo->', allInfo);

    return allInfo;
  };

  useEffect(() => {
    const result = getAllInfo();
    console.log('result->', result);
  }, []);

  return <>Consoleにて確認</>;
};
