import React from 'react';
import { darkMode_state } from '../../components/state';
import { useRecoilValue } from 'recoil';

export default ({ children } : any) => {
    const [prevent, setPrevent] = React.useState(false);
    const check = useRecoilValue(darkMode_state);

    React.useEffect(() => {
        setPrevent(true);
    }, []);

    const body = <div id="App" className={`${check ? 'dark' : 'light'}`}>{children}</div>

    // prevents ssr flash for mismatched dark mode
    if (!prevent) {
        return <div style={{ visibility: 'hidden' }}>{body}</div>
    }

    return body
}