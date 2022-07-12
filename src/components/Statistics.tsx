import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Statistics = () => {
  return (
      <Stack sx={{ pt: 12.5, pb: 12.5,pl: 27, mt: 17.5, bgcolor: '#858585', height: '459px'}}>
        <Typography color={'#ffffff'} sx={{fontSize: '58px', fontWeight: '700', mb:6.5 }}>Статистика</Typography>
        <Stack direction={'row'} spacing={8.875}>
        <Box>
              <Typography sx={{ bgcolor:'#ffffff', height: '60px', width: '60px', borderRadius: '50%', mb: 2.875}} />
              <Typography sx={{ bgcolor: '#ffffff', height: '24px', width: '285px', mb: 1.25 }} />
              <Typography sx={{ bgcolor: '#ffffff', height: '24px', width: '123px'}} />
        </Box>
          <Box>
              <Typography sx={{ bgcolor: '#ffffff', height: '60px', width: '60px', borderRadius: '50%', mb: 2.875 }} />
              <Typography sx={{ bgcolor: '#ffffff', height: '24px', width: '285px', mb: 1.25 }} />
              <Typography sx={{ bgcolor: '#ffffff', height: '24px', width: '123px' }} />
          </Box>
          <Box>
              <Typography sx={{ bgcolor: '#ffffff', height: '60px', width: '60px', borderRadius: '50%', mb: 2.875 }} />
              <Typography sx={{ bgcolor: '#ffffff', height: '24px', width: '285px', mb: 1.25 }} />
              <Typography sx={{ bgcolor: '#ffffff', height: '24px', width: '123px' }} />
          </Box>
          </Stack>
      </Stack>
  )
}
