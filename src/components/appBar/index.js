import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div>Santander</div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
