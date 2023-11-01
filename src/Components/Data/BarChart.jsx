import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    Typography,
} from "@mui/material";

import LoadAnimation from '../LoadAnimation/index';

import MaterialTable from "@material-table/core";
import axios from 'axios';


const BarChart = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/barchart'); // Replace with your API endpoint
            console.log(response, "lmldwklfn.....")
            setData(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const columns = [
        { title: "S.No", field: "serialNo", width: "10rem" },
        { title: "Interaction Title", field: "interactionTitle", width: "12rem" },
        { title: "Percentage", field: "percentage", width: "10rem" }
    ];

    return (
        <>
            <Box>
                <Box xs={12} sm={12} md={12} lg={12}>
                    {loading ? (
                        <LoadAnimation />
                    ) : (
                        <MaterialTable
                            title={<Typography variant='h5'>Interactions</Typography>}
                            columns={columns}
                            data={data}
                            options={{
                                actionsColumnIndex: -1,
                                addRowPosition: "first",
                                tableLayout: "fixed",
                                headerStyle: { fontWeight: "bold", fontSize: "1rem" },
                            }}
                        />
                    )}
                </Box>
            </Box>
        </>
    )
}

export default BarChart;