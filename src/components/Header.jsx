import { AppBar, IconButton, Box, Toolbar, Typography, Container, Tooltip } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import GitHubIcon from '@mui/icons-material/GitHub';




const Header = () => {

    return (
        <AppBar position="static" style={{backgroundColor: 'transparent', borderBottom: '1px solid #e5e2cf', boxSizing: 'border-box'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <GTranslateIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#e5e2cf' }} />
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
                            color: '#e5e2cf',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <GTranslateIcon fontSize='large' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip >
                            <IconButton sx={{ p: 0 }}>
                                <GitHubIcon fontSize='large' style={{color: '#e5e2cf'}}/>
                            </IconButton>
                        </Tooltip>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
