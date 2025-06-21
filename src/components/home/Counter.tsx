import { useEffect, useState, type FC } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const Counter: FC = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	})

	useEffect(() => {
		const updateCountdown = () => {
			const now = dayjs()
			const fiestaDate = dayjs(`${now.year()}-07-28`)
			const diff = fiestaDate.diff(now)

			if (diff <= 0) return

			const dur = dayjs.duration(diff)

			setTimeLeft({
				days: Math.floor(dur.asDays()),
				hours: dur.hours(),
				minutes: dur.minutes(),
				seconds: dur.seconds()
			})
		}

		updateCountdown()

		const interval = setInterval(updateCountdown, 1000)
		return () => clearInterval(interval)
	}, [])

	const labels = ['DÍAS', 'HORAS', 'MIN', 'SEG']
	const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]

	return (
		<section className="grid grid-cols-4 gap-2 text-center">
			{values.map((value, i) => (
				<div key={`hour-${i + 1}`} className="bg-primary text-white rounded-lg p-3">
					<div className="text-2xl font-bold">{value}</div>
					<div className="text-xs">{labels[i]}</div>
				</div>
			))}
		</section>
	)
}

export default Counter
