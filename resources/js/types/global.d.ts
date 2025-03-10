import { AxiosInstance } from 'axios';
import  { route as ziggyRoute, Config as ZiggyConfig } from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

		interface Parsable<T, R>
		{
			parse(data: R): T;
		}

    var route: typeof ziggyRoute;
    var Ziggy: ZiggyConfig;
}
