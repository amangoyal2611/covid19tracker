import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let changeableUrl = url;
    if (country && country !== 'global' ) {
         changeableUrl = `${url}/countries/${country}`
    }

    try {

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (e) {

    }
}

export const fetchDailyData = async () => {
    try {

        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;

    } catch (e) {

    }
}

export const fetchCountries = async () => {
    try {

        const { data: { countries } } = await axios.get(`${url}/countries`);

        const modifiedData = countries.map(({name}) => name);

        return modifiedData;

    } catch (e) {

    }
}
