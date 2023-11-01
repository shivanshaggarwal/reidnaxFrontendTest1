import React, { useState } from 'react';
import styles from './ForgetPassword.module.css';

import {
    Stack,
    Paper,
    IconButton,
    Box,
    Alert,
    Typography,
    TextField,
    LinearProgress,
    InputAdornment,
    Button,
} from '@mui/material';

// Components
import LoadingScreen from '../LoadingScreen';

// Images
import forgetPasswordImg from '../../assets/Images/forgotPassword.svg';


// Validation
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

const ForgetPassword = () => {
    const [loading, setLoading] = useState(false);

    const forgetPasswordSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        // password: Yup.string().required('Password is required'),
        // confirmPassword: Yup.string().required('Confirm Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            // password: '',
            // confirmPassword: ''
        },
        validationSchema: forgetPasswordSchema,
        onSubmit: async (values, { setErrors, resetForm }) => {
            try {
                setLoading(true);
                // const res = await login(values);
                setLoading(false);
                resetForm();
            } catch (error) {
                setErrors({ afterSubmit: error.message });
                resetForm();
            }
        }
    });

    // const handleShowPassword = () => {
    //     setShowPassword((show) => !show);
    // };

    // const handleShowConfirmPassword = () => {
    //     setShowConfirmPassword((show) => !show);
    // };

    const { errors, touched, values, handleSubmit, getFieldProps } = formik;

    if (loading) {
        setLoading(true);
        return <LoadingScreen />;
    }

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack direction='row' justifyContent='space-evenly' className={styles.stack} alignItems='center'>

                    <Stack display={{ xs: 'none', sm: 'none', md: "block" }} sx={{ width: { sm: '300px', md: '400px', lg: '600px' }, height: { sm: '300px', md: '400px', lg: '600px' } }}>
                        <img src={forgetPasswordImg} alt="login" style={{ width: '100%', height: '100%' }} />
                    </Stack>


                    <Paper component={Stack} p={4} spacing={2.5} elevation={10} sx={{ width: { xs: '20rem', sm: '25rem', md: '30rem' } }}>
                        {/*************************** Loading *********************/}
                        <Stack direction='row' justifyContent='center' >
                            {loading &&
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress />
                                </Box>
                            }
                        </Stack>
                        {/***************************** Lock Icon *****************************/}
                        <Stack alignItems='center' spacing={1}>
                            
                            <Typography variant='h4' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif", color: '#971b8b', textAlign: "center" }}>Forgot Password</Typography>
                        </Stack>

                        {/***************************** Alert for Error  *****************************/}

                        {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

                        {/***************************** Email  *****************************/}
                        <Stack direction='row'>
                            <TextField
                                fullWidth
                                label="Email"
                                required
                                type='email'
                                {...getFieldProps('email')}
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                            />
                        </Stack>

                        {/* <Stack direction='row'>
                            <TextField
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                label='Password'
                                required
                                {...getFieldProps('password')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={handleShowPassword} edge="end">
                                                <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                error={Boolean(touched.password && errors.password)}
                                helperText={touched.password && errors.password}
                            />
                        </Stack> */}

                        {/* <Stack direction='row'>
                            <TextField
                                fullWidth
                                type={showConfirmPassword ? 'text' : 'password'}
                                label='Confirm Password'
                                required
                                {...getFieldProps('confirmPassword')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={handleShowConfirmPassword} edge="end">
                                                <Icon icon={showConfirmPassword ? eyeFill : eyeOffFill} />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                            />
                        </Stack> */}

                        <Stack direction='row' pb={3} pt={2}>
                            <Button
                                variant='contained'
                                type='submit'
                                fullWidth
                                sx={{ height: '2.5rem' }}
                                disabled={errors.email}
                            >
                                Send
                            </Button>
                        </Stack>
                    </Paper>
                </Stack>
            </Form>
        </FormikProvider >
    )
}

export default ForgetPassword;