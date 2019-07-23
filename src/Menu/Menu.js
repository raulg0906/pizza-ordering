import React from 'react';
import styled from 'styled-components';
import { foods } from "../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from './FoodGrid'

const MenuStyled = styled.div `
    margin: 0px 400px 50px 20px;
    height: 1000px;

`
export function Menu() {
    return <MenuStyled>
        <h1> MENU </h1>
        <FoodGrid>
        {foods.map(food => (
            <Food img={food.img}>
            <FoodLabel>
            {food.name}
            </FoodLabel>
            </Food>
        ))}
        </FoodGrid>
    </MenuStyled>
    
}