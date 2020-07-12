import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames'
import CountUp from 'react-countup'
import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'loading...';
    }

    console.log();

    const date =
        new Date(lastUpdate).toLocaleString('default', { day: 'numeric', month: 'long' })
        + " "
        + new Date(lastUpdate).toLocaleTimeString();

    const cardsArray = [
        { label: 'Infected', value: confirmed.value, body: "Number of Active cases of covid-19", cls: 'infected' },
        { label: 'Recovered', value: recovered.value, body: "Number of Recoveries from covid-19", cls: 'recovered' },
        { label: 'Deaths', value: deaths.value, body: "Number of Deaths caused by covid-190", cls: 'deaths' }
    ];

    let cards = cardsArray.map((cardType, index) => {
        return <Grid xs={12} md={3} item component={Card} key={index} className={cx(styles.card, styles[cardType.cls])} >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{cardType.label}</Typography>
                <Typography variant="h5"><CountUp start={0} end={cardType.value} separator=','></CountUp></Typography>
                <Typography color="textSecondary">{date}</Typography>
                <Typography varient="body2">{cardType.body}</Typography>
            </CardContent>
        </Grid>

    });

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {cards}
            </Grid>
        </div>
    );
}

export default Cards;