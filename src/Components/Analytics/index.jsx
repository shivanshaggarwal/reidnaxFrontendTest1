import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Avatar,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Divider,
} from "@mui/material";

import styles from './Analytics.module.css';

// Icon
import { Icon } from "@iconify/react";

import Chart from './Chart';

import axios from 'axios';


function Analytics() {
    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures that useEffect runs only once (on mount)

    const fetchData = async () => {
        const response = await axios.get('http://localhost:5000/api/barchart'); // Replace with your API endpoint
        // console.log(response.data, "jded.....")
        setChartData(response.data);
    }

    return (
        <>
            <Box>
                <Typography sx={{ display: "flex", alignItems: "center" }} variant="h5">
                    <Avatar variant="rounded" className={styles.avatar}>
                        <Icon
                            icon="ic:sharp-dashboard-customize"
                            className={styles.analyticsIcon}
                        />
                    </Avatar>
                    Analytics
                </Typography>

                <Grid mt={2} container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Card className={styles.fullHeightCard} sx={{ backgroundColor: "#C1F0F5" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ backgroundColor: "#8BDBE5" }}>
                                        1
                                    </Avatar>
                                    <Typography variant="subtitle1" component="div">
                                        Create interactions via the analytics and distribute them to your participants.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Card className={styles.fullHeightCard} sx={{ backgroundColor: "#DFD8FD" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ backgroundColor: "#B8ACF6" }}>
                                        2
                                    </Avatar>
                                    <Typography variant="subtitle1" component="div">
                                        Participants engage and complete the interactions at their convenience.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Card className={styles.fullHeightCard} sx={{ backgroundColor: "#FFE2BD" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ backgroundColor: "#FEC57B" }}>
                                        3
                                    </Avatar>
                                    <Typography variant="subtitle1" component="div">
                                        View scores, reports and certificates of the candidates attempting the virtual interaction.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Card className={styles.fullHeightCard} sx={{ backgroundColor: "#FFD2CC" }}>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar sx={{ backgroundColor: "#FF9C8F" }}>
                                        4
                                    </Avatar>
                                    <Typography variant="subtitle1" component="div">
                                        Use our library or invite teammates to co-create learning interactions.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 3, mb: 2 }} />
                {/******************** Chart ********************/}
                {chartData && <Chart chartData={chartData} />}
                {/******************** View Interaction ********************/}
            </Box>
            {/* <Studentanalytics /> */}
        </>
    )
}

export default Analytics;