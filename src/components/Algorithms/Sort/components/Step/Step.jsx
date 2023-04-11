import styles from './Step.module.css';

const { updatedIndex, number, li } = styles;

export const Step = ({ target, index, oldValue, value }) => (
    <li className={li}>
        {target.map((elem, currentIndex) => (
            <div className={number} key={`${currentIndex}-${oldValue}-${value}-${index}`}>
                <p className={currentIndex === index ? updatedIndex : ''}>{elem}</p>
            </div>
        ))}
    </li>
);
