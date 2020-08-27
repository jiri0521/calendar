import React from "react";
import Calendar from "./calItem/Calendar";
import TaskBar from "./taskItem/TaskBar";

class CalendarTask extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: this.props.tasks,
      task_date: "",
      title: "",
      year: "",
      month: "",
    }
  }

  componentDidMount = () =>{
    const date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth() + 1

    let thisMonth = ("0"+month).slice(-2)
    let day = date.getDate()
    let task_date = year + "-" + thisMonth + "-" + day
    
    this.setState({
      task_date: task_date,
      year: year,
      month: month
    })
  }

  moveCal = (month) => {
    let year = this.state.year
    if(month < 1){
      let prevYear = year-1
      let month = 12
      this.setState({year: prevYear,month: month})
    } else if(month > 12){
      let nextYear = year+1
      let month = 1
      this.setState({year: nextYear,month: month})
    } else {
      this.setState({year: year,month: month})
    }
  }

  handlePrevCalendar = (prevMonth) => {
    let month = prevMonth
    this.moveCal(month)
    }

  handleNextCalendar = (nextMonth) => {
    let month = nextMonth
    this.moveCal(month)
  }

  handleFormDate = (click_day) => {
    let task_date = click_day
    this.setState({task_date: task_date})
  }

  handleCheckMyTask = (task_comp) => {
    let url = "/groups/" + this.props.group.id + "/tasks/" + task_comp.task_id
    $.ajax({
      url: url,
      datatype: 'json',
      type: 'PATCH',
      data: task_comp,
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))}
      }).done(function(tasks){
        this.setState({tasks: tasks})}.bind(this)
      ).fail(function(_xhr, status, err) {
        console.error(this.state.url, status, err.toString())}.bind(this)
    );
  }

  handleFormSubmit = (task) => {
    let url = "/groups/" + this.props.group.id + "/tasks"
    $.ajax({
      url: url,
      datatype: 'json',
      type: 'POST',
      data: task,
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))}
      }).done(function(tasks){
        this.setState({tasks: tasks})}.bind(this)
      ).fail(function(_xhr, status, err) {
        console.error(this.state.url, status, err.toString())}.bind(this)
    );
  }

  render(){
    return(
      <React.Fragment>

        <div className="container-fluid box">
          { <div className="member"></div> }

          <div className="calendar-bar">
            <div className="col-calendar">
              <Calendar 
                handlePrevCalendar={this.handlePrevCalendar}
                handleNextCalendar={this.handleNextCalendar}
                handleFormDate={this.handleFormDate}
                year={this.state.year}
                month={this.state.month}
                tasks={this.state.tasks}
                user={this.props.user}
              />
            </div>
            <TaskBar 
              tasks={this.state.tasks}
              group={this.props.group}
              user={this.props.user}
              other_users={this.props.other_users}
              other_tasks={this.props.other_tasks}
              task_date={this.state.task_date}
              title={this.state.title}
              authenticity_token={this.props.authenticity_token} 
              handleFormSubmit={this.handleFormSubmit}
              handleCheckMyTask={this.handleCheckMyTask}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default CalendarTask