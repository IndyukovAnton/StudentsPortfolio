import '../../assets/css/components/notification/notificationItem.css'

export type Notification = {
	title: string
	description: string
}

export function NotificationItem(proprs: {notification: Notification}) {
	const notification = proprs.notification

	return (
		<div className="notification">
			<p className="notification__title">{notification.title}</p>
			<p className="notification__description">{notification.description}</p>
		</div>
	)
}