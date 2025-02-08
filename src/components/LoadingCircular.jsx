import React from 'react'
import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';

export const LoadingCircular = () => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50vh'
        }}>
        <CircularProgress />
    </Box>
  )
}
