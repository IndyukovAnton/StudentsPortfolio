import { useState } from "react";
import NotificationButton from "./notificationButton";
import type { Notification } from "./notificationItem";
import { NotificationsModal } from "./notificationsModal";
import React from "react";


export default function NotificationsWrapper() {

	const [isActive, setActive] = useState(false)

	const notifications: Notification[] = [
		{
			title: "Новое обновление!",
			description: "Сайт переписан на React!",
		}
	]

	function toggleNotificationsWindow() {
		setActive(!isActive)
	}

	const handleClick = React.useCallback(toggleNotificationsWindow, [isActive, setActive]);

	return (
		<div className="notifications-wrapper">
			<NotificationButton hasNotifications={Boolean(notifications.length)} onClickHandler={toggleNotificationsWindow}/>
			<NotificationsModal state={isActive} notifications={notifications}/>
			<div className="notifications-overlay" onClick={handleClick}></div>
		</div>
	)
}