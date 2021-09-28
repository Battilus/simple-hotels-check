import {styled, TextField} from "@mui/material";


export const RecTextField = styled(TextField) ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#C9CACC',
        },
        '&:hover fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },
})

export const AuthTextField = styled(TextField) ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#C9CACC',
            backgroundColor: 'white',
            width: '324px',
            height: '44px',
        },
        '&:hover fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },
})
