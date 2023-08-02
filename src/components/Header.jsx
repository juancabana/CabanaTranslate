import { styled, AppBar, IconButton, Box, Toolbar, Typography, Container, FormControlLabel, Switch } from '@mui/material';
import { useDispatch } from "react-redux";
import GTranslateIcon from '@mui/icons-material/GTranslate';
import GitHubIcon from '@mui/icons-material/GitHub';

const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
    },
    '&:before': {
          content: '""',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  
  

const Header = () => {
    const dispatch = useDispatch();

    return (
        <AppBar position="static" style={{ backgroundColor: 'transparent', borderBottom: '1px solid #CFE0E5', boxSizing: 'border-box' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <GTranslateIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#CFE0E5' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0rem',
                            color: '#CFE0E5',
                            textDecoration: 'none',
                        }}
                    >
                        CabanaTranslate
                    </Typography>

                    <GTranslateIcon fontSize='large' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#CFE0E5' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0rem',
                            color: '#CFE0E5',
                            textDecoration: 'none',
                        }}
                    >
                        CabanaTranslate
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                    {/* <FormControlLabel
                            control={<Android12Switch sx={{ m: 1 }} defaultChecked /> }
                            onChange={() => dispatch({ type: 'SET_IS_MANUAL'})}
                            label="Manual mode"
                        /> */}
                        <a href='https://github.com/juancabana/CabanaTranslate' target='_blank' rel="noreferrer"  >
                            <IconButton sx={{ p: 0 }}>
                                <GitHubIcon fontSize='large' style={{ color: '#CFE0E5    ' }} />
                            </IconButton>
                        </a>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
