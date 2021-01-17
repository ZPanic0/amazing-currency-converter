import { CircularProgress, Grid } from '@material-ui/core'
import React from 'react'

export const LoadingDisplay = () => <>
    <Grid item xs={12}>
        <CircularProgress />
    </Grid>
    <Grid item xs={12}>
        Just a moment! We are fetching the available exchange rates.
</Grid>
</>