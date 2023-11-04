import { Typography, Grid } from '@mui/material'

function Skills() {
    return <>
    <div className="skillMain paddingLR">
        <Typography variant='h4'>My Skills</Typography>
        <br />
        <br />
        <center>
            <Grid container lg={12} xs={12}>
                <Grid item lg={3} xs={6}>
                    <img className='javascript' src="images/skills/skilllogo/javascript2.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='mongodb' src="images/skills/skilllogo/mongodb2.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='express' style={{paddingTop: '15px'}} src="images/skills/skilllogo/express2.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='react' src="images/skills/skilllogo/react2.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='node' src="images/skills/skilllogo/node2.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='recoil' src="images/skills/skilllogo/recoil2.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='jwt' src="images/skills/skilllogo/jwt3.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='github' src="images/skills/skilllogo/github2.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='npm' src="images/skills/skilllogo/npm.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='postman' src="images/skills/skilllogo/postman2.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='aws' src="images/skills/skilllogo/aws2.png" alt="" />
                </Grid>
                <Grid item lg={3} xs={6}>
                    <img className='docker' src="images/skills/skilllogo/docker2.png" alt="" />
                </Grid>
            </Grid>
        </center>
    </div>
    </>
}

export default Skills