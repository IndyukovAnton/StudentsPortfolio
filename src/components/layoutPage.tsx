import { useState } from "react"
import { Outlet } from "react-router-dom";

import Header from "./header"
import LessonsMenu from "./lessonsMenu"
import Search from "./search"
import Burger from "./burger"
import NotificationsWrapper from "./notification/notificationWrapper"
import Footer from "./footer"

const LayoutPage = (props: {searchValue, actionFunc}) => {
	return (
		<>
		<Header>
			<Search value={props.searchValue} onChange={props.actionFunc}/>
			<NotificationsWrapper />
			<Burger />
		</Header>

		<LessonsMenu />

		<Outlet />

		<Footer />
		</>
	)
}

export { LayoutPage }