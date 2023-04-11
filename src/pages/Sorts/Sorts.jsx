import { Sort } from 'components/Algorithms';
import { useParams } from 'react-router-dom';
import all from 'algorithms';

const Sorts = () => {
    const { id } = useParams();
    const algorithm = all.sorts.find(({ id: algId }) => id === algId);

    return(
        <Sort algorithm={algorithm} />
    );
}

export default Sorts;