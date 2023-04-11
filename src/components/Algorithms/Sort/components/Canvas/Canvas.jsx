import propTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import { Button, Flex } from 'components/Elements';

import styles from './Canvas.module.css';

const { button } = styles;

const Canvas = ({ originalArray, algorithmSteps, delay }) => {
    const [context, setContext] = useState(null);
    const [preferences, setPreferences] = useState(null);
    const canvasRef = useRef(null);

    const draw = () => {
        const { heightPerOne, width } = preferences;
        let i = 0;

        const iterate = () => {
            const { target, index } = algorithmSteps[i];
            
            setTimeout(() => {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                target.forEach((elem, currentIndex) => {
                    if (currentIndex === index) {
                        context.fillStyle = 'red';
                    } else {
                        context.fillStyle = 'green';
                    }

                    const height = elem * heightPerOne;
                    context.fillRect(currentIndex * width, 380 - height, width, height);

                    context.fillStyle = 'black';
                    context.fillText(elem, currentIndex * width + (width / 2 - 6), 395);
                });

                ++i;
                if (i < algorithmSteps.length) {
                    iterate();
                }
            }, delay);
        };

        iterate();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasContext = canvas.getContext('2d');
        canvasContext.font = '14px Arial';
        const width = 600 / originalArray.length;
        const heightPerOne = 380 / Math.max(...originalArray);

        originalArray.forEach((elem, index) => {
            const height = elem * heightPerOne;
            canvasContext.fillStyle = 'green';

            canvasContext.fillRect(index * width, 380 - height, width, height);

            canvasContext.fillStyle = 'black';
            canvasContext.fillText(elem, index * width + (width / 2 - 6), 395);
        });
        setPreferences({
            width,
            heightPerOne,
        });
        setContext(canvasContext);
    }, [originalArray]);

    return (
        <Flex direction="column" alignItems="flex-start">
            <Button label="Run" className={button} onClick={draw} />
            <canvas ref={canvasRef} width="600px" height="400px" />
        </Flex>
    );
};

Canvas.defaultProps = {
    delay: 200,
};

Canvas.propTypes = {
    originalArray: propTypes.arrayOf(propTypes.number).isRequired,
    algorithmSteps: propTypes.arrayOf(
        propTypes.shape({
            index: propTypes.number,
            oldValue: propTypes.number,
            value: propTypes.number,
            target: propTypes.arrayOf(propTypes.number),
        })
    ).isRequired,
    delay: propTypes.number,
};

export { Canvas };