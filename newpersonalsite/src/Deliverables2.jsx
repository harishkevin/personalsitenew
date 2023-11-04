import { Typography, Button } from "@mui/material"
import { Grid } from "@mui/material"

function Deliverables2() {
    return <>
    <div className="deliverableMain" style={{
        paddingLeft: '5%',
        paddingRight: '5%'
    }}>
        <Typography variant='h3'>Projects</Typography>
        <br />
        <br />
        <Grid container lg={12} spacing={2}>
            <Grid item lg={4}>
                <img style={{width: '100%',borderRadius: '5px'}} src="/images/render/render.png" alt="" />
            </Grid>
            <Grid item lg={4}>
                <img style={{width: '100%',borderRadius: '5px'}} src="/images/render/render3.png" alt="" />
            </Grid>
            <Grid item lg={4}>
                <img style={{width: '100%',borderRadius: '5px'}} src="/images/render/render3.png" alt="" />
            </Grid>
        </Grid>
    </div>
    </>
}

function Githubbutton() {
    return<>
    <Button style={{
        background: '#5C6BC0',
        textTransform: 'capitalize',
        color: 'white'
    }} variant="contained" size="small"><img style={{width:'15px',marginRight: '5px'}} src="images/icons/github.png" alt="" />View Code</Button>
    </>
}

export default Deliverables2