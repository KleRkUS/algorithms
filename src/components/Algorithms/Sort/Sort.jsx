import propTypes from 'prop-types';
import { memo, useEffect, useState, useCallback } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Flex, Text } from 'components/Elements';

import styles from './Sort.module.css';
import { Canvas } from './components';

const { leftPart, rightPart, codeSnippetHeading } = styles;

const Sort = memo(({ algorithm }) => {
    const [algorithmSteps, setAlgorithmSteps] = useState([]);

    const instructions = Symbol('instructions');

    const getObservableInstance = useCallback((array) => {
        const target = [...array];

        target[instructions] = [];

        return new Proxy(target, {
            set: (target, property, value) => {
                const oldValue = target[property];

                target[property] = value;
                target[instructions].push({
                    index: Number(property),
                    oldValue,
                    value,
                    target: [...target],
                });

                return true;
            },
        });
    }, [instructions]);

    useEffect(() => {
        const observableInstance = getObservableInstance(algorithm.array);
        algorithm.function(observableInstance, observableInstance.length, () => {
            setAlgorithmSteps(observableInstance[instructions]);
        });
    }, []);

    return (
        <>
            <Text type="heading" size="medium">
                {algorithm.name}
            </Text>
            <Flex alignItems="flex-start">
                <div className={leftPart}>
                    <p>Initial array: {algorithm.array}</p>
                    {/* {algorithmSteps && (
                        <>
                            <p>Algorithm steps: </p>
                            <ul className={ul}>
                                {algorithmSteps.map((props) => (
                                    <Step key={`${props.target}-${props.value}`} {...props} />
                                ))}
                            </ul>
                        </>
                    )} */}

                    <Text type="text" size="medium">
                        {algorithm.description}
                    </Text>
                </div>
                <div className={rightPart}>
                    <Canvas originalArray={algorithm.array} algorithmSteps={algorithmSteps} delay={algorithm.delay} />
                    {algorithm.mutableCode && (
                        <>
                            <Text type="heading" size="small" className={codeSnippetHeading}>
                                Mutable code
                            </Text>
                            <SyntaxHighlighter language="javascript" style={a11yDark}>
                                {algorithm.mutableCode}
                            </SyntaxHighlighter>
                        </>
                    )}
                    {algorithm.immutableCode && (
                        <>
                            <Text type="heading" size="small" className={codeSnippetHeading}>
                                Immutable code
                            </Text>
                            <SyntaxHighlighter language="javascript" style={a11yDark}>
                                {algorithm.immutableCode}
                            </SyntaxHighlighter>
                        </>
                    )}
                </div>
            </Flex>
        </>
    );
});

Sort.propTypes = {
    algorithm: propTypes.shape({
        id: propTypes.string,
        name: propTypes.string,
        array: propTypes.arrayOf(propTypes.number),
        function: propTypes.func,
        delay: propTypes.number,
        description: propTypes.string,
        mutableCode: propTypes.string,
        immutableCode: propTypes.string
    }).isRequired,
};

export { Sort };