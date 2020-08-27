import React from "react";
import OtherNav from "./OtherNav"
import OtherTab from "./OtherTab"

class OtherTask extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: 0,
    }
  }

  selectedIndex = (e) => {
    let index = e.target.id.slice(4,7)
    this.setState({
      active: index
    })
  }

  render(){
    return(
      <React.Fragment>
        <div className="other-task">
          <div /* className="other-task-header"*/>他ユーザーの達成度</div>
          <OtherNav other_users={this.props.other_users}
                    selectedIndex={this.selectedIndex}
                    active={this.state.active}
          />
          <OtherTab other_users={this.props.other_users}
                    other_tasks={this.props.other_tasks}
                    task_date={this.props.task_date}
                    active={this.state.active}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default OtherTask