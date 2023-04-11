import all from 'algorithms';
import { useParams } from 'react-router-dom';

import { Sort } from 'components/Algorithms';

const Sorts = () => {
    const { id } = useParams();
    const algorithm = all.sorts.find(({ id: algId }) => id === algId);

    return <Sort algorithm={algorithm} />;
};

export default Sorts;
