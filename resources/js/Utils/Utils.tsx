import { Store } from 'react-notifications-component';
import {
	NOTIFICATION_CONTAINER,
	NOTIFICATION_INSERTION,
	NOTIFICATION_TYPE
} from "react-notifications-component/dist/src/typings";


export interface NotificationParameters
{
	title?: string;
	message?: string;
	insert?: NOTIFICATION_INSERTION,
	container?: NOTIFICATION_CONTAINER,
	dismissDuration?: number;
	dismissOnScreen?: boolean;
	type?: NOTIFICATION_TYPE;
}

export class Utils
{

	public static getDateString(date: Date): string
	{
		return (date.toISOString()).substring(0, date.toISOString().indexOf('T'));
	}

	public static successNotification(params?: NotificationParameters): void
	{
		Utils.notification({
			...params,
			type: "success",
		});
	}

	public static errorNotification(params?: NotificationParameters): void
	{
		Utils.notification({
			...params,
			type: "danger",
		});
	}

	public static notification(params?: NotificationParameters)
	{
		Store.addNotification({
			title: params?.title,
			message: params?.message,
			type: "success",
			insert: params?.insert ?? "top",
			container: params?.container ?? "top-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: params?.dismissDuration ?? 2000,
				onScreen: params?.dismissOnScreen ?? true
			}
		});
	}
}
