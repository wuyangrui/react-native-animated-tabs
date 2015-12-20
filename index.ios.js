'use strict';

var React = require('react-native');
var AnimatedTabs = require('./animated-tabs/AnimatedTabs.js');
var { AppRegistry, StyleSheet, Component, View, Text } = React;
var Dimensions = require('Dimensions');
const deviceHeight = Dimensions.get('window').height;

class ReactNativeAnimatedTabs extends Component {
    render() {
        var content = new Array(7).fill().map((x, i) => "Tab: " + (i + 1));
        var tabs = content.map(this.getPanelContent);

        return (
            <View style={styles.animatedView}>
                <AnimatedTabs tabBarLabels={content} tabBarStyle="footer" carousel={true}>
                    {tabs}
                </AnimatedTabs>
            </View>
        );
    }

    getPanelContent(x, i) {
        return (
            <View key={i} style={styles.tabContent}>
                <Text>Content: {x}</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    animatedView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    tabContent: {
        height: deviceHeight - 70,

        backgroundColor: '#C1F7DD',
        padding: 15,
        borderColor: 'rgba(0,0,0,0.1)'
    }
});

AppRegistry.registerComponent('ReactNativeAnimatedTabs', () => ReactNativeAnimatedTabs);