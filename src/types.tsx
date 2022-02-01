
export interface countrieProps {
  id: number,
  name: string,
  iso_a2: string,
  iso_a3: string,
  capital: string,
  continent: string,
  ice_position: string,
  life_expectancy: number,
  health_expenditure_percap: number,
  map_coordinate: {
    latitude: number,
    longitude: number
  },
  url_flag: string,
  searches: {
    population: [{
      gender: string,
      etary_groups: [{
        age_range: string,
        amount: number
      }]
    }]

    economy: economyCountrieProps[]
  }

  references: {
    id: number,
    name: string,
    url_search: string
  }
}


export interface countriesListProps {
  id: number,
  name: string,
  flag: string
}

export interface economyCountrieProps {
  id_activity: number,
  name_activity: string,
  colors: [],
  details: [{
    id: number,
    name: string,
    value: number,
    unit: string
    reference: string
  }],
}