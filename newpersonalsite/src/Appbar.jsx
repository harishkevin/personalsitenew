import { Typography } from "@mui/material"

function Appbar() {
    return <>
    <div className="appBarMain paddingLR">
        <div className="logoDiv">
            <Typography variant="h5" style={{fontFamily: 'SCRegular', color: '#86868B'}}>harishkevinn@gmail.com</Typography>
        </div>
        <div className="optionsDiv">
            <Typography variant="h6">About</Typography>
            <Typography variant="h6">Works</Typography>
            <Typography variant="h6">Courses</Typography>
        </div>
    </div>
    </>
}

export default Appbar