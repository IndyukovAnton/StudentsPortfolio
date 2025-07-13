import '../../assets/css/components/notification/notificationModal.css'

import type { Notification } from "./notificationItem"
import { NotificationItem } from "./notificationItem"

export function NotificationsModal(props: {state: boolean, notifications: Notification[]}) {
	const notifications = props.notifications

	if (!notifications.length) { return }

	return (
		<div className={`notifications-modal ${props.state ? 'active' : ''}`}>
			<p className="notifications-modal__header">Уведомления</p>
			<div className="notifications-modal__wrapper">
				{
					notifications.map((notification: Notification, index) => <NotificationItem key={index} notification={notification}/>)
				}
			</div>
		</div>
	)
}