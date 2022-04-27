import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Recipes = () => {
    const [recipe, setRecipe] = useState([]);
    const [isActive, setIsActive] = useState('instructions')
    let param = useParams();

    const getRecipe = async(name) => {
        const res = await fetch(`${process.env.REACT_APP_URL}/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}&`);
        const data = await res.json();
        setRecipe(data);
    };

    useEffect(() => {
        getRecipe(param.recipe);
    }, [param.recipe]);

    return (
        <div className='grid grid-cols-2 gap-4'>
            <h1 className='my-5 col-span-2 text-center text-2xl'>{recipe.title}</h1>
            <div>
                <img src={recipe.image} alt="" />
            </div>
            <div>
                <button 
                    className={isActive === 'instructions' ? 'recipeButton active' : 'recipeButton'}
                    onClick={() => setIsActive('instructions')}>Instruction</button>
                <button
                    className={isActive === 'ingredients' ? 'recipeButton active' : 'recipeButton'} 
                    onClick={() => setIsActive('ingredients')}>Ingredients</button>
                {isActive === 'instructions' && (
                    <div className='mt-7'>
                        <p dangerouslySetInnerHTML={{ __html: recipe.summary}} className='mb-4'></p>
                        <p dangerouslySetInnerHTML={{ __html: recipe.instructions}}></p>
                    </div>
                )}
                {isActive === 'ingredients' && (
                    <ul className='mt-7'>
                        {recipe.extendedIngredients.map((ingredient, index) => {
                            return(
                                <li key={`${ingredient}__${index}`} className='mb-2'>
                                    {ingredient.original}
                                </li>
                            )
                        })}
                    </ul>
                )}    
            </div>

        </div>
    )
}
