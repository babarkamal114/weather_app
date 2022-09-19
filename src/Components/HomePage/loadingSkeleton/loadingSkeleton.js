import React from 'react';
import {Grid, Skeleton} from "@mui/material";

const LoadingSkeleton = () => {
    return [
        <>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
            key={0}
            >
                <Grid item xs={4} key="0">
                    <Skeleton sx={{backgroundColor: "#334155"}} width="20%" animation="wave"/>
                    <Skeleton sx={{backgroundColor: "#334155"}} width="30%" animation="wave"/>
                </Grid>
                <Grid item xs={4} key="1">
                    <Skeleton key="3" sx={{backgroundColor: "#334155"}} variant="rounded" width="100%" height={30}/>
                </Grid>
            </Grid>
            <div className="mt-6"  key="4">
                <Skeleton  key="5" sx={{backgroundColor: "#334155", height: "250px"}} variant="rounded"
                          width="100%" animation="wave"/>
            </div>
            <div className="mt-6"  key="6">
                <Skeleton  key="7" sx={{backgroundColor: "#334155", height: "250px"}} variant="rounded"
                          width="100%" animation="wave"/>
            </div>
        </>
    ]
}
export default LoadingSkeleton;