import * as React from 'react';


export interface RawLastMusculationsSession
{
	body_part_id: string;
	last_session_number: number;
}


class LastMusculationsSession implements Parsable<LastMusculationsSession, RawLastMusculationsSession>
{
	body_part_id: string;
	last_session_number: number;

	constructor()
	{
		this.body_part_id = "";
		this.last_session_number = -1;
	}

	public parse(rawLastMusculationsSession: RawLastMusculationsSession): LastMusculationsSession
	{
		this.body_part_id = rawLastMusculationsSession.body_part_id;

		this.last_session_number = rawLastMusculationsSession.last_session_number;

		return this;
	}

}

export default LastMusculationsSession;


