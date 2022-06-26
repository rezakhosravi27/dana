import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logoImage from '../../images/logo.png'


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to="/">
        dana
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

type propsHandler = {
  showLoginFormHandler : () => void
}

export default function SignupForm(props: propsHandler) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      remember: data.get('remember')
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <img src={logoImage} alt="logo" style={{width: '56px', height: '56px'}}/>
          <Typography component="h1" variant="h4" fontFamily="nazaninBold">
            ثبت نام
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="ايميل"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{style:{fontFamily: 'vazir'}}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{style:{fontFamily: 'vazir'}}}
            />
            <FormControlLabel
              control={<Checkbox name="remember" value="remember" color="primary" />}
              label="مرا بخاطر بسپار"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ثبت نام
            </Button>
            <Grid container>
              <Grid item>
                <Typography onClick={() => props.showLoginFormHandler()} sx={{textDecoration: 'underline', color: 'blue', cursor: 'pointer'}}>
                  {"حساب كاربری داريد؟ورود"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}