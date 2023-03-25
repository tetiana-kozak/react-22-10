import { Typography } from '@mui/material'

type Props = {
    children: React.ReactNode
}
const Title = ({ children }: Props) => {
    return (
        <Typography
            variant="h4"
            component="h1"
            sx={{
                marginBottom: '30px',
                textAlign: 'center',
            }}
        >
            {children}
        </Typography>
    )
}
export default Title
