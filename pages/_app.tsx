import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NotificationContextProvider } from "../store/notification-context";
gsap.registerPlugin(CSSPlugin);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* <Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());
			
					gtag('config', '${process.env.GA_TRACKING_ID}');
				`}
			</Script> */}
			<NotificationContextProvider>
				<Component {...pageProps} />
			</NotificationContextProvider>
		</>
	);
}
