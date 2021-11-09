import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
	return (
		// to share session state between all pages
		<Provider session={pageProps.session}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
