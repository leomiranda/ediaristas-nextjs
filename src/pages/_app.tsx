/* eslint-disable @next/next/no-page-custom-font */
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>e-diaristas</title>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
