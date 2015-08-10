import React from 'react';
import Router from 'react-router';
import AppLeftNav from './app-left-nav';
import FullWidthSection from './full-width-section';
import { AppBar, AppCanvas, IconButton, Menu, Styles } from 'material-ui';

let RouteHandler = Router.RouteHandler;
let { Colors, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

class Master extends React.Component {

  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
    this._onPersonClick = this._onPersonClick.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  componentWillMount() {
    ThemeManager.setPalette({
        primary1Color: Colors.blue500,
        primary2Color: Colors.blue700,
        primary3Color: Colors.blue100,
        accent1Color: Colors.red500,
        accent2Color: Colors.red700,
        accent3Color: Colors.red100
    });
  }

  getStyles() {
    let darkWhite = Colors.darkWhite;
    return {
      appBar: {
        backgroundColor: Colors.blue500,
      },
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center'
      },
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: '0',
        color: Colors.lightWhite,
        maxWidth: '335px'
      },
      iconButton: {
        color: darkWhite
      }
    };
  }

  render() {
    let styles = this.getStyles();
    let personButton = (
        <IconButton
            iconStyle={styles.iconButton}
            iconClassName="material-icons"
            onTouchTap={this._onPersonClick}
            linkButton={true}>person</IconButton>
    );

    let title =
      this.context.router.isActive('datatron') ? 'Datatron' :
      this.context.router.isActive('thirsty-camel') ? 'Thirsty Camel' :
      this.context.router.isActive('remora') ? 'Remora' :
      this.context.router.isActive('get-started') ? 'Get Started' :
      this.context.router.isActive('customization') ? 'Customization' :
      this.context.router.isActive('components') ? 'Components' : '';

    return (
      <AppCanvas>

        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          style={styles.appBar}
          zDepth={0}
          iconElementRight={personButton}/>

        <AppLeftNav ref="leftNav" />

        <RouteHandler />

        <FullWidthSection style={styles.footer}>
          <p style={styles.p}>
            The Future of Data is Now
          </p>
        </FullWidthSection>

      </AppCanvas>
    );
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

  _onPersonClick() {
    this.context.router.transitionTo('root');
  }

}

Master.contextTypes = {
  router: React.PropTypes.func
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Master;
