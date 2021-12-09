import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({ Component, pageProps: { session, ...pageProps} }) => {
    return (
        <SessionProvider session={session}>
            <ReduxProvider store={store}>
                <Component {...pageProps} />
            </ReduxProvider>
        </SessionProvider>
    );
};

export default MyApp;
