import '../../assets/css/components/notification/notificationButton.css'

export default function NotificationButton(props: {hasNotifications: boolean, onClickHandler: React.MouseEventHandler<HTMLButtonElement>}) {
	return (
		<button className="notifications-button" onClick={props.onClickHandler}>
			<img className="notifications-icon" src="../../src/assets/images/icons/icon_notification.svg" alt="icon notifications" />
			<div className={`dot-indicator ${props.hasNotifications ? 'visible': ''}`}></div>
		</button>
	)
}