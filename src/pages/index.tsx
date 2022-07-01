import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';
import { countryProps, geoJsonProps } from '../services/types';

import { Contents } from '../components/Content/Content';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { useTheme } from '../contexts/theme';

export default function Home({ countries, mapData }) {

  const [countrieSelectedId, setCountrieSelectedId] = useState(25594)

  function handleClickCountrie(id: number) {
    setCountrieSelectedId(id)
  }

  const [countrie] = countries.filter(countrie => countrie.id === countrieSelectedId)

  const sidebarList = countries.map(countrie => {
    return {
      id: countrie.id,
      name: countrie.name,
      flag: countrie.url_flag
    }
  })

  const { theme } = useTheme()

  return (
    <div className='home' style={{ backgroundColor: theme.bg200 }}>
      <Sidebar countriesList={sidebarList} countrieActive={handleClickCountrie} colorsTheme={theme} />
      <Contents countrieSelected={countrie} mapBoxData={mapData} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  try {
    const countries = await api.get<countryProps[]>('/countriesData.json')
      .then(response => response.data)

    const dataGeoJson = await api.get<geoJsonProps>('/geometryCountries.json')
      .then(response => response.data)

    const mapUrl = 'https://api.mapbox.com/styles/v1/manuelmolina2/ckz3iba2b001a15nl5e8afl24/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFudWVsbW9saW5hMiIsImEiOiJja2djbGc1cmMwMnJvMnJwNzJhMXVyaTE5In0.Yp3bxi5Yl5zfiGUQok193g';

    const mapData = {
      dataGeoJson,
      mapUrl
    }

    return {
      props: {
        countries,
        mapData,
      }
    }

  } catch {

    throw new Error('Data lookup failed')
  }
}
