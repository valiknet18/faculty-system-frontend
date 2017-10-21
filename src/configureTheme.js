import { createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import teal from 'material-ui/colors/teal';
import blueGrey from 'material-ui/colors/blueGrey';

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: blueGrey,
        error: red,
    },
});

export default function configureTheme() {
    return theme;
};
