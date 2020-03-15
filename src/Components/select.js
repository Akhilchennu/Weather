import React from 'react';
import { useDispatch  } from "react-redux";
import Chip from '@material-ui/core/Chip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
        maxWidth: '100%'
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    centerAlign: {
        margin: 'auto',
        width: '40%',
    }
}));

const MenuProps = {
    getContentAnchorEl: null,
    anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      }
};
function getStyles(cityName, cityValues, theme) {
    return {
        fontWeight:
        cityValues.indexOf(cityName) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function Selectcity() {

    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    const [cityNames]=React.useState(['sunnyvale','New York','Newport Beach',])
    const [cityValues, setcityValues] = React.useState([]);

    const handleChange = event => {
        dispatch({ type: "UPDATEDATA",
        weatherData:event.target.value })
        setcityValues(event.target.value);
    };


    return (
        <div className={classes.centerAlign}>
            <FormControl className={classes.formControl}>
                <InputLabel id="cityInput">City</InputLabel>
                <Select
                    labelId="cityInput"
                    id="citySelect"
                    multiple
                    autoWidth
                    value={cityValues}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.map(value => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                    )}
                    MenuProps={MenuProps}
                >
                    {cityNames.map(name => (
                        <MenuItem key={name} value={name} style={getStyles(name, cityValues, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            
        </div>
    );
}




export default Selectcity;