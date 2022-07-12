import { Button, Stack } from '@mui/material'
import React from 'react'

export const Hashtager = () => {
  return (
      <Stack direction={"row"} sx={{ mt: 2, }}>
          <Button
              sx={{
                  fontSize: '16px',
                  bgcolor: '#D9D9D966',
                  borderRadius: '0px',
                  mr: 2.375,
                  color: 'black',
                  p: 1.25,
                  textTransform: 'none'
              }}>
              #Хештег
          </Button>
          <Button
              sx={{
                  fontSize: '16px',
                  bgcolor: '#D9D9D966',
                  borderRadius: '0px',
                  mr: 2.375,
                  color: 'black',
                  p: 1.25,
                  textTransform: 'none'
              }}>
              #Хештег
          </Button>
          <Button
              sx={{
                  fontSize: '16px',
                  bgcolor: '#D9D9D966',
                  borderRadius: '0px',
                  mr: 2.375, color: 'black',
                  p: 1.25,
                  textTransform: 'none'
              }}>#Хештег</Button>
          <Button
              sx={{
                  fontSize: '16px',
                  bgcolor: '#D9D9D966',
                  borderRadius: '0px',
                  mr: 2.375,
                  color: 'black',
                  p: 1.25,
                  textTransform: 'none'
              }}>#Хештег</Button>

      </Stack>
  )
}
