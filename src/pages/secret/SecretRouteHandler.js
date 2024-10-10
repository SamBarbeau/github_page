import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SecretRouteHandler = ({ setSecretUnlocked }) => {
    const [keySequence, setKeySequence] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const secretCode = ['s', 'a', 'm', '=', 'j', 'i', 'l', 'l'];

        const handleKeyPress = (event) => {
            const key = event.key.toLowerCase();

            const newSequence = [...keySequence, key].slice(-secretCode.length);
            setKeySequence(newSequence);

            if (newSequence.join('') === secretCode.join('')) {
                console.log('Code unlocked!');
                setSecretUnlocked(true);
                navigate('/secret');
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [keySequence, setSecretUnlocked]);

    return null; // No visual component, just a side effect handler
};

export default SecretRouteHandler;
