import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./ShowPage.scss";
import Select from "react-select";
import { getShowDetail, changeSeason } from "../../actions/shows";
import { getEpisodeList } from "../../actions/episodes";

import BackArrow from "../../assets/arrow-back.svg";

import ErrorBoundary from "../../containers/ErrorBoundary";
import ShowDetail from "../../components/ShowDetail";
import EpisodeList from "../../components/EpisodeList";

class ShowPage extends React.Component {
  getSeasonsList() {
    return [...new Set(this.props.episodeList.map(episode => episode.season))];
  }

  // Event handler for select season dropdown
  handleSeasonChange = selectedValue => {
    this.props.changeSeason(selectedValue.value);
  };

  filterEpisodesBySeason() {
    return this.props.episodeList.filter(episode => {
      return episode.season === this.props.selectedSeason;
    });
  }

  componentDidMount() {
    let showId = this.props.match.params.showId;
    if (this.props.showDetail.length === 0) {
      this.props.getShowDetail(showId);
      this.props.getEpisodeList(showId);
    } else if (showId !== this.props.showDetail.id) {
      this.props.getShowDetail(showId);
      this.props.getEpisodeList(showId);
    }
  }

  render() {
    const { isLoadingShowDetail, isLoadingEpisodeList, showDetail, selectedSeason } = this.props;

    const showId = this.props.match.params.showId;

    // Create options of select season dropdown
    const selectSeasonOptions = this.getSeasonsList().map((seasonNumber, i) => {
      return { value: seasonNumber, label: "Season " + seasonNumber };
    });

    return (
      <div className="ShowPage">
        <div className="ShowPage__details">
          <div className="ShowPage__back-home">
            <Link to="/" className="">
              <img src={BackArrow} alt="Home" />
            </Link>
          </div>
          <ErrorBoundary>
            <ShowDetail isLoading={isLoadingShowDetail} show={showDetail} />
          </ErrorBoundary>
        </div>
        <div className="ShowPage__episodes">
          <h2 className="sr-only">Episodes</h2>
          <Select
            defaultValue={{ value: selectedSeason, label: `Season ${selectedSeason}` }}
            onChange={this.handleSeasonChange}
            options={selectSeasonOptions}
            isSearchable={false}
            className="ShowPage__select-season"
          />
          <ErrorBoundary>
            <EpisodeList
              isLoading={isLoadingEpisodeList}
              episodeList={this.filterEpisodesBySeason()}
              showId={showId}
            />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingShowDetail: state.showPage.isLoadingShowDetail,
  isLoadingEpisodeList: state.showPage.isLoadingEpisodeList,
  showDetail: state.showPage.showDetail,
  episodeList: state.showPage.episodeList,
  selectedSeason: state.showPage.selectedSeason
});

export default connect(mapStateToProps, { getShowDetail, getEpisodeList, changeSeason })(ShowPage);
