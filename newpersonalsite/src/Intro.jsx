import {Typography, Button} from '@mui/material'

function Intro() {
    return <>
    <div className="introMain paddingLR paddingTB">
        <div className='introSub'>
            <Typography variant='h3'>Hello, I'm Harish Panchanatham</Typography>
            <br />
            <Typography variant='h2'>Bring your ideas to reality through my code</Typography>
            <br />
            <Typography variant='h5'>a Fullstack Web Developer and a passionate Data Scientist from Chennai who loves to build and deliver quality product</Typography>
            <br />
            {/* <Button className='introButton' variant="contained" size='large'>Let's Connect</Button> */}
            <div className='social'>
                <img style={{width: '40px'}} src="/images/icons/githubsocial.png" alt="" />
                {/* <img style={{width: '40px'}} src="/images/icons/discordsocial.png" alt="" /> */}
                <img style={{width: '40px'}} src="/images/icons/linkedinsocial.png" alt="" />
                <img style={{width: '40px'}} src="/images/icons/twittersocial.png" alt="" />
            </div>
        </div>
    </div>
    </>
}

export default Intro