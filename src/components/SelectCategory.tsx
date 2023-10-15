import { ChangeEvent, FC } from 'react';
import { categories } from '../types/categories';

interface SelectCategoryProps{
  categories: categories[];
  selectedCategory: string;
  onSelect: (value: string)=> void;
  title: string;
}
const  SelectCategory:FC<SelectCategoryProps> = ({ categories, selectedCategory, onSelect, title }) => {
  const handleSelect = (e:ChangeEvent<HTMLSelectElement>)=>{
    onSelect(e.target.value);
  } 

  return (
   <div className='flex gap-2 mt-2 items-center'>
    <label htmlFor="select">{title}:</label>
     <select name='select' className='border-black border rounded p-1' value={selectedCategory} onChange={handleSelect}>
      <option value="">Select a category</option>
      {categories.map((category) => (
        <optgroup label={category.name} key={category.id}>
          {category.subcategories.map((subcategory) => (
            <option value={subcategory.name} key={subcategory.id}>
              {subcategory.name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
   </div>
  );
}

export default SelectCategory;
