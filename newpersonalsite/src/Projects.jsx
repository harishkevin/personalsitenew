import { Grid, Typography } from "@mui/material"

function Projects() {
    return <>
    <div>
        {/* <Typography variant='h4' style={{
            textAlign:'center'
        }}>My Tech Stack</Typography>
        <br />
        <br /> */}
        <Grid container lg={12} sm={12} xs={12}>
            <Grid className="projectItem"item lg={3} sm={3} xs={6}style={{background:'#191622', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h4" className="deliverableh4">The Tech Stack I Use</Typography>
            </Grid>
            <Grid className="projectItem"item lg={3} sm={3} xs={6}style={{background:'#4FAA41'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/mongodb.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">MongoDb</Typography>
                    <Typography variant="h6">Database Management</Typography>
                </center>  
            </Grid>
            <Grid className="projectItem" item lg={3} sm={3} xs={6}style={{background:'black'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/express.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">Express.js</Typography>
                    <Typography variant="h6">Web Applications and REST APIs</Typography>
                </center>         
            </Grid>
            <Grid className="projectItem"item lg={3} sm={3} xs={6} style={{background:'#61DAFB'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/react.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">React</Typography>
                    <Typography variant="h6">Responsive Web Design</Typography>
                </center>
            </Grid>
            <Grid className="projectItem"item lg={3} sm={3} xs={6}style={{background:'#83CD29'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/node.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">Node.js</Typography>
                    <Typography variant="h6">Server-side logic, APIs, and handling requests</Typography>
                </center>               
            </Grid>
            <Grid className="projectItem"item lg={3} sm={3} xs={6}style={{background:'#3577e5'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/recoil.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">Recoil.js</Typography>
                    <Typography variant="h6">React State Management</Typography>
                </center>               
            </Grid>
            <Grid className="projectItem"item lg={3} sm={3} xs={6}style={{background:'linear-gradient( 135deg, hsl(254deg 43% 16%) 0%, hsl(261deg 44% 16%) 11%, hsl(268deg 45% 15%) 22%, hsl(275deg 46% 15%) 33%, hsl(281deg 47% 15%) 44%,hsl(288deg 48% 15%) 56%, hsl(295deg 50% 14%) 67%,hsl(301deg 52% 14%) 78%, hsl(307deg 56% 14%) 89%, hsl(312deg 60% 15%) 100%)'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/github.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">Github</Typography>
                    <Typography variant="h6">Version Control</Typography>
                </center>
            </Grid>
            {/* <Grid className="projectItem"item lg={3} sm={3} xs={6}style={{background:'#F36933'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/postman.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">Postman</Typography>
                    <Typography variant="h6">API Testing</Typography>
                </center>
            </Grid> */}
            <Grid className="projectItem"item lg={3} sm={3} xs={6}style={{background:'#252F3E'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/aws.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">Amazon Web Services</Typography>
                    <Typography variant="h6">Deployment</Typography>
                </center>
            </Grid>
            {/* <Grid className="projectItem"item lg={3} sm={3} xs={6}style={{background:'#019BC6'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/docker.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">Docker</Typography>
                    <Typography variant="h6">Containerization</Typography>
                </center>
            </Grid> */}
            {/* <Grid className="projectItem"item lg={3} sm={3} xs={6} style={{backgroundImage:`url(${`/images/render/renderblur.png`})`, backgroundSize: 'cover'}}>
                <center>
                    <img style={{width:'',height: '50px'}} src="/images/icons/core.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">CoreAi</Typography>
                    <Typography variant="h6">E-Learning App</Typography>
                </center>
            </Grid>
            <Grid className="projectItem"item lg={3} sm={3} xs={6} style={{backgroundImage:`url(${`/images/render/render3blur.png`})`, backgroundSize: 'cover'}}>
                <center>
                    <img style={{width:'50px',height: '50px'}} src="/images/icons/beet.png" alt="" />
                    <Typography variant="h4" className="deliverableh4">Beetcode</Typography>
                    <Typography variant="h6">Leetcode Clone</Typography>
                </center>
            </Grid> */}
        </Grid>
    </div>
    </>
}

export default Projects