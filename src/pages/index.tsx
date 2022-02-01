import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { Contents } from '../components/Contents';
import { Sidebar } from '../components/Sidebar/ index';


export default function Home({ countries, list, getJSON }) {

  const [countrieSelectedId, setCountrieSelectedId] = useState(25594)

  function handleClickCountrie(id: number) {
    setCountrieSelectedId(id)
  }

  const [countrie] = countries.filter(countrie => countrie.id === countrieSelectedId)


  return (
    <>
      <Sidebar countriesList={list} countrieActive={handleClickCountrie} />
      <Contents countrieSelected={countrie} geoJSON={getJSON} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const countries = await axios.get('https://manuelmolina02.github.io/Data/testData.json')
    .then(response => response.data)
    .then(data => data)

  const getJSON = await axios.get('https://manuelmolina02.github.io/Data/geometryCountries.json')
    .then(response => response.data)

  const list = countries.map(countrie => {
    return {
      id: countrie.id,
      name: countrie.name,
      flag: countrie.url_flag
    }
  })

  return {
    props: {
      countries,
      list,
      getJSON
    }
  }
}
