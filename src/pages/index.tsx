import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { Contents } from '../components/Content/Content';
import { Sidebar } from '../components/Sidebar/Sidebar';

import { countriesListProps, countryProps, geoJsonProps } from '../services/types';

export default function Home({ countries, sidebarList, mapData }) {

  const [countrieSelectedId, setCountrieSelectedId] = useState(25594)

  function handleClickCountrie(id: number) {
    setCountrieSelectedId(id)
  }

  const [countrie] = countries.filter(countrie => countrie.id === countrieSelectedId)

  return (
    <>
      <Sidebar countriesList={sidebarList} countrieActive={handleClickCountrie} />
      <Contents countrieSelected={countrie} mapBoxData={mapData} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  try {
    const countries = await axios.get<countryProps[]>('https://manuelmolina02.github.io/Data/testData.json')
      .then(response => response.data)

    const dataGeoJson = await axios.get<geoJsonProps>('https://manuelmolina02.github.io/Data/geometryCountries.json')
      .then(response => response.data)

    const mapUrl = 'https://api.mapbox.com/styles/v1/manuelmolina2/ckz3iba2b001a15nl5e8afl24/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFudWVsbW9saW5hMiIsImEiOiJja2djbGc1cmMwMnJvMnJwNzJhMXVyaTE5In0.Yp3bxi5Yl5zfiGUQok193g'

    const sidebarList = countries.map<countriesListProps>(countrie => {
      return {
        id: countrie.id,
        name: countrie.name,
        flag: countrie.url_flag
      }
    })

    const mapData = {
      dataGeoJson,
      mapUrl
    }

    return {
      props: {
        countries,
        sidebarList,
        mapData
      }
    }

  } catch {

    throw new Error('Data lookup failed')
  }
}
