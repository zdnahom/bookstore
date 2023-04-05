import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/features/categories/categoriesSlice';

const Categories = () => {
  const { categories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <section className="categories">
      <h2>{categories}</h2>
      <button type="button" className="check-status-button" onClick={() => dispatch(checkStatus())}>check status</button>
    </section>
  );
};

export default Categories;
