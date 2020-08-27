import React from "react"

class TaskForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comp: "false",
      comp_checked: "false"
    }
  }

  handleCheck = (e) => {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      comp: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let task = {
      task_date: e.target.task_date.value, 
      title: e.target.title.value,
      comp: e.target.comp.value, 
      // task_start :e.target.task_start.value,
      // task_end :e.target.task_end.value,
      user_id: e.target.user_id.value
     }
    this.props.onFormSubmit(task);
    e.target.title.value = '';
    e.target.comp.checked = false;
    this.setState({
      comp: "false",
      comp_checked: "false"
    });
  };

  render(){
    return(
      <div className="data-submit">
        <form 
          className="form-horizontal"
          onSubmit={(e) => this.handleSubmit(e)} 
        >
          <div className="form-group">
            <label /*className="col-sm-3 control-label task"*/>
              日付
            </label>
            <div className="col-sm-7">
              <input
                className="form-control"
                name="task_date"
                type="date"
                value={this.props.task_date}
              />
            </div>
          </div>
          <div className="form-group">
            <label /*className="col-sm-3 control-label task"*/>
              メンバー
            </label>
            <div className="col-sm-9">
              <textarea
                className="form-control"
                name="title"
                rows="1"
                placeholder="メンバーの名前"
              />
            </div>
          </div>
          <div className="form-group">
            <label /*</div>className="col-sm-2 control-label task"*/>
              達成
            </label>
            <input
              name="comp"
              type="checkbox"
              value={this.state.comp}
              onClick={this.handleCheck}
            />
          </div>
                    
           {/* 
           <label>
            開始時間
            <input
              name="task_start"
              type="time"
              value={this.props.task_start}/>
          </label></br > 

          <label>
            終了時間
            <input
              name="task_end"
              type="time"
              value={this.props.task_end}/>
          </label><br /> 

*/}

          <input 
            type='hidden' 
            name='authenticity_token' 
            value={this.props.authenticity_token} />
          <input 
            type='hidden' 
            name='user_id' 
            value={this.props.user.id} />
          <div className="form-group">
            <div className="text-center">
              <input type="submit" value="登録" className="btn btn-primary" /*btn btn-outline-light"*/ />
            </div>
          </div>
        </form>
      </div>
    );
  };
};

export default TaskForm