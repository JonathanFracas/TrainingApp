export class Utils
{

	public static getDateString(date: Date): string
	{
		return (date.toISOString()).substring(0, date.toISOString().indexOf('T'));
	}

}
