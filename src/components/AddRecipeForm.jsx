import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Please enter at least two ingredients.";
    } else {
      const ingredientsArray = ingredients.split(",").map((item) => item.trim());
      if (ingredientsArray.length < 2) {
        newErrors.ingredients = "At least two ingredients are required.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Please enter preparation steps.";
    } else {
      const stepsArray = steps.split(".").map((step) => step.trim());
      if (stepsArray.length < 2) {
        newErrors.steps = "At least two preparation steps are required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; 

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(".").map((step) => step.trim()),
    };

    console.log("Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            rows="3"
            placeholder="Example: Tomato, Onion, Garlic, Olive oil"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Preparation Steps (separate with periods)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            rows="4"
            placeholder="Example: Chop vegetables. Cook for 10 minutes. Serve hot."
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
