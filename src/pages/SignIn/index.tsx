import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Container,
    CssBaseline,
    Box,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    CircularProgress,
    Alert
} from '@mui/material'
import { Link } from 'react-router-dom';
import Copyright from '../../components/CopyrightComp'
import AuthComp from '../../components/AuthComp';

interface infoData {
    email: any,
    password: any
}

const SignIn = () => {
    const [ login, setLogin ] = useState<boolean>(false);
    const infoPattern = {email: 'monathcorey@gmail.com', password: '123'};
    const [ user, setUser ] = useState<infoData>();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const info: infoData = {
            email: data.get('email'),
            password: data.get('password')
        }
        isLogin(info);
        setUser(info);
    }

    const isLogin = useCallback((data: infoData) => {
        if (infoPattern.email === data.email && infoPattern.password === data.password) {
            setLogin(true);
            const interval = setInterval(() => {
                navigate('/check-out');
            }, 1500);
            return () => clearInterval(interval);
        } else {}
    }, [])

    const isLoginFaild = () => {
        if (!login && user) {
            return <Alert severity="error">Login Faild. Try to do it.</Alert>;
        } else { return; }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <AuthComp pageName="Sign In" />
                {isLoginFaild()}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type='password'
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {
                            login ? <CircularProgress color='inherit' size={15} sx={{ mr: 1 }} /> : ''
                        }
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='body2' color='text.secondary'>
                                <Link to='/'>Forget Password?</Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body2' color='text.secondary'>
                                <Link to='/sign-up'>Don't you have an account? Sign Up</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 8 }} />
                </Box>
            </Box>
        </Container>
    )
}

export default SignIn;