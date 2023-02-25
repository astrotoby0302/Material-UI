import {
    Avatar,
    Typography
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AvatarLogo from '../assets/images/avatar-1.jpg'

const AuthComp = (props: any) => {
    const { pageName } = props;
    return (
        <>
            <Avatar
                sx={{
                    m: 1,
                    bgcolor: 'secondary.main'
                }}
                src={AvatarLogo}
            >
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant='h5'>{ pageName }</Typography>
        </>
    )
}

export default AuthComp;