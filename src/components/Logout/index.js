import * as React from "react";
import {connect} from "react-redux";
import {logout} from "../../services/actions/auth";

class Logout extends React.Component {
    render() {
        let { dispatch } = this.props;

        return (
            <div></div>
        );
    }
}

export default connect()(Logout);
