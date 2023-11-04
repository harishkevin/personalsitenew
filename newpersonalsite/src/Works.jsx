import { Typography } from "@mui/material"
import { Grid } from "@mui/material"
import { cloneElement } from "react"


function Works() {
    return <>
    <div className="worksMain paddingLR">
    <Typography variant='h3' style={{textAlign: 'center'}}>Projects</Typography>
    <Grid container lg={12}>
        <Grid className="workItem" item lg={6} container justifyContent="center">
            <div style={{ width: '60%',border:'1px solid red'}}>
                <img style={{width: '50%'}} src="/images/render/render1.png" alt="" />
                <Typography variant="h4" className="deliverableh4">E-Learning App</Typography>
                <Typography variant="h6">Internet-based education hub for courses and resources, accessible from anywhere.</Typography>
            </div>
        </Grid>
        <Grid className="workItem" item lg={6} container justifyContent="center">
            <div style={{  width: '60%',border:'1px solid red'}}>
                <Typography variant="h4" className="deliverableh4">Leetcode Clone</Typography>
            </div>
        </Grid>
    </Grid>
    </div>
    </>
}

export default Works