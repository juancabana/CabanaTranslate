import { Container, Box, CssBaseline } from '@mui/material'
import UpBar from './UpBar'
import DownContent from './DownContent'
const TranstalorContent = () => {
  return (
    <>
    <CssBaseline />
      <Container maxWidth='lg' style={{height: '100vh'}}>
        <Box sx={{ bgcolor: '#2D2C2C', height: 'auto', padding: '1rem', borderRadius: '10px', boxSizing: 'border-box'}}>
          <UpBar />
          <DownContent />
        </Box>
      </Container>
    </>
  );
}

export default TranstalorContent;