import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { reduxForm } from 'redux-form';
import styles from './styles';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Email:</Text>
            </View>
        );
    }
}

export default reduxForm({
    form: 'test'
})(HomeView);
