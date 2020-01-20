import React from "react";
import { connect } from "react-redux";
import "./HomePage.scss";

import FeaturedShow from "../../components/FeaturedShow";
import ShowList from "../../components/ShowList";

import { getShowDetail, getShowList } from "../../actions/shows";

class HomePage extends React.Component {
  componentDidMount() {
    //if (this.props.showDetail.length === 0) {
    // Re-use of getShowDetail function - may show re-rendering in frontend
    this.props.getShowDetail(6771);
    //}
    if (this.props.showList.length === 0) {
      this.props.getShowList();
    }
  }

  render() {
    const { isLoadingShowDetail, showDetail, isLoadingShowList, showList } = this.props;
    return (
      <div className="HomePage">
        <div className="HomePage__featured">
          <FeaturedShow isLoading={isLoadingShowDetail} show={showDetail} />
        </div>

        <div className="HomePage__show-list">
          <ShowList isLoading={isLoadingShowList} showList={showList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingShowDetail: state.homePage.isLoadingShowDetail,
  isLoadingShowList: state.homePage.isLoadingShowList,
  showDetail: state.homePage.showDetail,
  showList: state.homePage.showList
});

export default connect(mapStateToProps, { getShowDetail, getShowList })(HomePage);
