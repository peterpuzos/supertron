let React = require('react');
let { Paper, Styles } = require('material-ui');
//let CodeBlock = require('../code-example/code-block');
let FullWidthSection = require('../full-width-section');

let { Spacing, Typography } = Styles;

class Remora extends React.Component {

  constructor() {

    super();

    this.state = {

    }

  }

  getStyles() {
    return {
      root: {
        paddingTop: Spacing.desktopKeylineIncrement
      },
      fullWidthSection: {
        maxWidth: '650px',
        margin: '0 auto'
      },
      headline: {
        fontSize: '36px',
        lineHeight: '44px',
        paddingTop: '16px',
        marginBottom: '12px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightNormal,
        color: Typography.textDarkBlack
      },
      title: {
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        fontWeight: Typography.fontWeightMedium,
        color: '#f00'//Typography.textDarkBlack
      },
      codeExample: {
        backgroundColor: this.context.muiTheme.palette.canvasColor,
        marginBottom: '32px'
      }
    };
  }

  render() {

    let styles = this.getStyles();

    return (
      <div>
        <FullWidthSection style={styles.FullWidthSection}>

          <h2 style={styles.headline}>Remora</h2>



        </FullWidthSection>
      </div>
    );
  }

}

Remora.contextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Remora;
