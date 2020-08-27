import React from "react";
import MyTask from "./MyTask";
import OtherTask from "./OtherTask"

class TaskBar extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className="task">
          <MyTask 
            tasks={this.props.tasks} 
            group={this.props.group} 
            user={this.props.user} 
            task_date={this.props.task_date}
            title={this.props.title}
            authenticity_token={this.props.authenticity_token} 
            handleFormSubmit={this.props.handleFormSubmit}
            handleCheckMyTask={this.props.handleCheckMyTask}
          />
        </div>
        <hr className="sidebar-divider my-0"></hr>
          <OtherTask
            task_date={this.props.task_date}
            other_users={this.props.other_users}
            other_tasks={this.props.other_tasks}
          />
          <hr className="sidebar-divider my-0"></hr>
          {/*<h5>コメント</h5> */}
      </React.Fragment>
    );
  };

}

export default TaskBar