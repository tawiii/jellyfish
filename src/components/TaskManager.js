import React, { Component } from 'react';
import {valueTextarea} from '../AC';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Tasks from './Tasks';

const styles = theme => ({
  textField: {
    margin: '0 20px 30px 0',
  }
});

class TaskManager extends Component {

  state = {
    text: ''
  }

  handleChange = type => event => {
    this.setState({
      [type]: event.target.value
    })
  };

  handleAddTask = () => {
    if (this.state.text) {
      const newTask = {
        text: this.state.text,
        id: Date.now()
      };
      this.props.valueTextarea(newTask);
      this.setState({text: ''});
    }
  };

  render () {
    const {classes} = this.props;
    return (
      <Paper className="wrap">
        <TextField
          className={classes.textField}
          label="Describe the task"
          multiline
          variant="outlined"
          onChange={this.handleChange('text')}
          value={this.state.text}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleAddTask}>
          add task
        </Button>
        <Divider />
        <Tasks />
      </Paper>
    );
  }
}

export default connect(null, {valueTextarea})(withStyles(styles)(TaskManager))
