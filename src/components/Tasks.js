import React, { Component } from 'react';
import {deleteTask, dataStorage} from '../AC';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Tasks extends Component {

  componentWillReceiveProps(nextProps) {
    this.saveToLocalStorage(nextProps.tasks)
  }

  saveToLocalStorage(newTasks) {
    const tasks = JSON.stringify(newTasks)
    localStorage.setItem('newTasks', tasks)
  }

  componentWillMount() {
    const saveTasks = JSON.parse(localStorage.getItem('newTasks'));
    saveTasks && this.props.dataStorage(saveTasks);
  }

  handleDeleteTask = (deleteId) => {
    this.props.deleteTask(deleteId);
  };

  render () {
    const {tasks} = this.props;
    return (
      <div className="boxes">
        <Grid container spacing={16}>
          {tasks.map(item => {
            return (
              <Grid key={item.id} item xs={4}>
                <Paper className="box-wrap">
                  <span
                    className="close"
                    onClick={() => this.handleDeleteTask(item.id)}>
                    <i className="close-icon material-icons">close</i>
                  </span>
                  <p>{item.text}</p>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </div>
    );
  }
}

export default connect((state) => ({
  tasks: state.tasks
}), {deleteTask, dataStorage})(Tasks)
