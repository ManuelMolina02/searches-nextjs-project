export interface sidebarListProps {
  id: number;
  name: string;
  flag: string;
}

// Country obj
export interface countryProps {
  id: number;
  name: string;
  iso_a2: string;
  iso_a3: string;
  capital: string;
  continent: string;
  ice_position: string;
  life_expectancy: number;
  health_expenditure_percap: number;
  url_flag: string;
  searches: {
    population: [
      {
        gender: string;
        etary_groups: [
          {
            age_range: string;
            amount: number;
          }
        ];
      }
    ];

    economy: economyProps[];
  };

  references: {
    id: number;
    name: string;
    url_search: string;
  };
}

//Economy
export interface economyProps {
  id_activity: number;
  name_activity: string;
  details: detailsEconomyProps[];
}

export interface economyProps2 {
  id: number;
  country: string;
  imports: {
    mainProducts: detailsEconomyProps2[];
    mainConsumers: detailsEconomyProps2[];
  };
  exports: {
    mainProducts: detailsEconomyProps2[];
    mainConsumers: detailsEconomyProps2[];
  };
}

export interface detailsEconomyProps2 {
  id: string;
  name: string;
  value: number;
  refence: string;
}

export interface detailsEconomyProps {
  id: number;
  name: string;
  value: number;
  reference: string;
}

//geoJson

export interface geoJsonProps {
  type: string;
  id: string;
  geometry: {
    type: string;
    coordinates: [];
  };
}
