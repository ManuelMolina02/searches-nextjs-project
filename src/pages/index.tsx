import axios from "axios";
import { Sidebar } from "../components/Sidebar/ index";
import { GetServerSideProps } from 'next'
import { Content } from "./content";
import { useState } from "react";



export default function Home({ countriesSearches }) {
	console.log(handleClickCountrie)


	const [countrieSelected, setCountrieSelected] = useState('025597')

	function handleClickCountrie(id: string) {
		console.log(id)
		setCountrieSelected(id)
	}


	return (
		< div >
			<Sidebar countries={countriesSearches} countrieActive={handleClickCountrie} />
			<Content countries={countriesSearches} countrieId={countrieSelected} />
		</div >
	);
}

export const getServerSideProps: GetServerSideProps = async () => {



	const jsonData = await axios.get('https://manuelmolina02.github.io/Data/testData.json')
		.then(response => response.data)
		.then(data => data);




	return {
		props: {
			countriesSearches: jsonData,

		},

	}
}
