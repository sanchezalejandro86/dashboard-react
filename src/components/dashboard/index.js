import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {
            movements,
        } = this.props;

        return (
            <Page
                movements={movements}
            />
        );
    }
}

const mapStateToProps = state => ({
    movements: state.movements,
}) ;

export default withRouter(connect(mapStateToProps)(Dashboard));
