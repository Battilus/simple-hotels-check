import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const RecTextField = (props) => {
    return (
        <TextField {...props} inputProps={{ classes: { underline: props.classes.inputOverride } }} />
    )
}

export default withStyles({
    root: {
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
    },
})(RecTextField);