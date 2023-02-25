import { Link, Typography } from "@mui/material";

const CopyrightComp = (props: any) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            Copyright @{' '}
            <Link href="https://hulkcars.com" color="inherit">Your website</Link>{' '}
            {new Date().getFullYear()}{' '}.
        </Typography>
    )
}

export default CopyrightComp;