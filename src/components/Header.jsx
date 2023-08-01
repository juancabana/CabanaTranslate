import { AppBar, IconButton, Box, Toolbar, Typography, Container, Tooltip } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import GitHubIcon from '@mui/icons-material/GitHub';




const Header = () => {

    return (
        <AppBar position="static" style={{backgroundColor: 'transparent', borderBottom: '1px solid #CFE0E5', boxSizing: 'border-box'}}>
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
                            letterSpacing: '.3rem',
                            color: '#CFE0E5',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
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
                            letterSpacing: '.3rem',
                            color: '#CFE0E5',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip >
                            <IconButton sx={{ p: 0 }}>
                                <GitHubIcon fontSize='large' style={{color: '#CFE0E5    '}}/>
                            </IconButton>
                        </Tooltip>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
