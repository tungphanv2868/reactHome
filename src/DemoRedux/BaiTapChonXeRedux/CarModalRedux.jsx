import React, { Component } from "react";
//import thư viện kết nối với store
import { connect } from "react-redux";

class CarModalRedux extends Component {
  render() {
    console.log('props',this.props);
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.carDetail.name}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={this.props.carDetail.img} className='w-100'/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Hàm chuyển đổi state từ redux biến đổi thành props của component
const mapStateToProps = (rootReducer) => {
    //rootReducer state tổng của ứng dụng
    return{
        carDetail:rootReducer.carDetailReducer
    }
}

export default connect(mapStateToProps)(CarModalRedux); 
