import { Typography, Button } from "@mui/material"
import { Grid } from "@mui/material"

function Deliverables() {
    return <>
    <div className="deliverableMain paddingLR">
        <Typography variant='h3'>Projects</Typography>
        <br />
        <br />
        
        <Grid lg={12} md={12} sm={12} container spacing={4}>
            <Grid item lg={12} md={6} sm={6}>
                <div className="deliverableBigTile tile1">
                    <div className="width50 widthSwitch">
                        <Typography variant="h4">E-Learning Platform</Typography>
                        <br />
                        <Typography variant='h5'>Educational platform for sharing and accessing diverse online courses</Typography>
                        <br />
                        <Githubbutton></Githubbutton>
                    </div>
                    <br />
                    <div className="width50 widthSwitch" style={{paddingBottom: '0px'}}>
                        <center><img style={{width: '100%',borderRadius: '5px'}} src="/images/render/rendergrad.png" alt="" /></center>
                    </div>
                </div>
            </Grid>
            <Grid item lg={12} md={6} sm={6}> 
                <div className="deliverableBigTile tile2">
                    <div className="width50 widthSwitch">
                        <Typography variant="h4">Leetcode Clone</Typography>
                        <br />
                        <Typography variant='h5'>Practice, compete, and improve coding skills online</Typography>
                        <br />
                        <Githubbutton></Githubbutton>
                    </div>
                    <br />
                    <div className="width50 widthSwitch">
                        <center><img style={{width: '100%',borderRadius: '5px'}} src="/images/render/render3rgad.png" alt="" /></center>
                    </div>
                </div>
            </Grid>
            {/* <Grid item lg={6} md={6} sm={6} container> 
                <div className="deliverableSmallTile tile3">
                    <div>
                        <Typography variant="h4">Todo App</Typography>
                        <br />
                        <Typography variant='h5'>Organize tasks, set reminders, and boost productivity effortlessly</Typography>
                        <br />
                        <Githubbutton></Githubbutton>
                    </div>
                    <div style={{width: '50%'}}>
                        <center><img src="/images/" alt="" /></center>
                    </div>
                </div>
            </Grid> */}
            {/* <Grid item lg={12} md={12} sm={12}>
                <div className="deliverableBigTile tile5">
                    <div className="width50 widthSwitch">
                        <Typography variant="h4">Tools used</Typography>
                        <br />
                        <Typography variant='h5'></Typography>
                    </div>
                    <div className="width50 widthSwitch">
                        
                    </div>
                </div>
            </Grid> */}
        </Grid>
    </div>
    </>
}

export default Deliverables

function Githubbutton() {
    return<>
    <Button style={{
        background: '#5C6BC0',
        textTransform: 'capitalize',
        color: 'white'
    }} variant="contained" size="small"><img style={{width:'15px',marginRight: '5px'}} src="images/icons/github.png" alt="" />View Code</Button>
    </>
}