import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/Notification";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: any) {
	const notificationCtx = useContext(NotificationContext);

	const activeNotification = notificationCtx.notification;

	return (
		<div className="xl:max-x-[1280px] relative flex h-full min-h-screen min-w-[360px] flex-col lg:container">
			<Header />
			<main className="mt-[100px] px-20 pb-40">{children}</main>
			{activeNotification && <Notification {...activeNotification} />}
		</div>
	);
}

export default Layout;
