import * as React from "react";
import {connect} from "react-redux";
import {Snackbar} from "material-ui";
import {hideAdminMessage} from "../../../services/actions/admin/index";

class Snackbars extends React.Component {
    handleRequestClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        let { dispatch } = this.props;

        dispatch(hideAdminMessage());
    };

    render() {
        let { message } = this.props;

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={message}
                autoHideDuration={3000}
                onRequestClose={this.handleRequestClose.bind(this)}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{message}</span>}
            />
        );
    }
}

function mapStateToProps({ admin }) {
    return {
        message: admin.message
    }
}

export default connect(mapStateToProps)(Snackbars);
