import React from "react";
import { Doughnut } from "react-chartjs-2";
import styles from './styles.module.scss'


interface chartBarProps {
	population: {}
}

export function ChartBar({ population }: chartBarProps) {

	const data = {
		datasets: [
			{

				data: [population[1], population[0]],
				backgroundColor: [
					'rgba(255, 99, 132, .8)',
					'rgba(54, 162, 235, .8)',

				],
				borderColor: '#2e303c7e',
				borderWidth: 3,
				hoverOffset: 4,
			},
		],
	};

	return (

		<div className={styles.chart}>
			<Doughnut data={data} />
		</div>

	);
}