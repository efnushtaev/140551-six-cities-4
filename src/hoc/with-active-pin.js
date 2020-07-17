import React, {PureComponent} from 'react';

const withActivePin = (Component) => {
  class WithActivePin extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activePin: null
      };
      this.setActivePin = this.setActivePin.bind(this);
    }

    setActivePin(id) {
      this.setState({activePin: id});
    }

    render() {
      const {activePin} = this.state;
      return <Component
        {...this.props}
        activePin={activePin}
        setActivePin={this.setActivePin}
      />;
    }
  }

  WithActivePin.propTypes = {};

  return WithActivePin;
};

export default withActivePin;
