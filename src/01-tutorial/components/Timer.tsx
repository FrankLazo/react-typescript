import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
	milliseconds: number,
}

const Timer = ({ milliseconds }: TimerArgs) => {
	const [seconds, setSeconds] = useState(0);
	const ref = useRef<NodeJS.Timeout>();

	useEffect(() => {
		// Para que clearInterval no bote error, verificar la existencia de ref.current
		ref.current && clearInterval(ref.current);
		ref.current = setInterval(() => setSeconds(sec => sec + 1), milliseconds);
	}, [milliseconds]);

	return (
		<div>
			<p>Timer: <small className="has-text-primary is-size-3">{ seconds }</small></p>
		</div>
	);
}

export default Timer;
