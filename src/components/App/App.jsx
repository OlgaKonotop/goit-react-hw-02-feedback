import { Component } from 'react';
import { Message } from 'components/Message/Message';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import PropTypes from 'prop-types';
import { Container, Heading } from 'components/App/App.styled';

class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    updateGood: PropTypes.number.isRequired,
    updateNeutral: PropTypes.number.isRequired,
    updateBad: PropTypes.number.isRequired,
    total: PropTypes.string.isRequired,
    positiveFeedback: PropTypes.string.isRequired,
    good: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  updateNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  updateBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    let positivePercentage = 0;
    positivePercentage = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(positivePercentage) || 0;
  }

  render() {
    return (
      <Container>
        <Heading>Cafe Expresso Feedback</Heading>
        <Section title="Please leave feedback">
          <FeedbackOptions
            updateGood={this.updateGood}
            updateNeutral={this.updateNeutral}
            updateBad={this.updateBad}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
            />
          </Section>
        ) : (
          <Message />
        )}
      </Container>
    );
  }
}
export default App;
