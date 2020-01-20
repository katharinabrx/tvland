import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { connect } from "react-redux";
import { getEpisodeList, getEpisodeDetailById, changeSeason } from "../../actions/episodes";
import ErrorBoundary from "../../containers/ErrorBoundary";
import BackArrow from "../../assets/arrow-back.svg";

import "./EpisodePage.scss";

import EpisodeDetail from "../../components/EpisodeDetail";
import EpisodeList from "../../components/EpisodeList";

class EpisodePage extends React.Component {
  getSeasonsList() {
    return [...new Set(this.props.episodeList.map(episode => episode.season))];
  }

  // Event handler for select season dropdown
  handleSeasonChange = selectedValue => {
    //console.log(this.props);
    this.props.changeSeason(selectedValue.value);
  };

  filterEpisodesBySeason() {
    return this.props.episodeList.filter(episode => {
      return episode.season === this.props.selectedSeason;
    });
  }

  componentDidMount() {
    let { showId, episodeId } = this.props.match.params;
    if (this.props.episodeDetail.length === 0) {
      this.props.getEpisodeDetailById(episodeId);
      this.props.getEpisodeList(showId);
    } else if (episodeId !== this.props.episodeDetail.id) {
      this.props.getEpisodeDetailById(episodeId);
      this.props.getEpisodeList(showId);
    }
  }

  componentDidUpdate() {
    let episodeSlug = this.props.match.params.episodeId;
    let episodeId = this.props.episodeDetail.id;

    if (episodeId !== undefined) {
      if (episodeSlug !== episodeId.toString()) {
        this.props.getEpisodeDetailById(episodeSlug);
      }
    }
  }
  render() {
    const {
      isLoadingEpisodeDetail,
      isLoadingEpisodeList,
      episodeDetail,
      selectedSeason
    } = this.props;

    const showId = this.props.match.params.showId;

    // Create options of select season dropdown
    const selectSeasonOptions = this.getSeasonsList().map((seasonNumber, i) => {
      return { value: seasonNumber, label: "Season " + seasonNumber };
    });

    return (
      <div className="EpisodePage">
        <div className="EpisodePage__details">
          <div className="EpisodePage__back-show">
            <Link to={`/shows/${showId}`} className="">
              <img src={BackArrow} alt="Home" />
            </Link>
          </div>
          <ErrorBoundary>
            <EpisodeDetail isLoading={isLoadingEpisodeDetail} episode={episodeDetail} />
          </ErrorBoundary>
        </div>
        <div className="EpisodePage__episodes">
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
  isLoadingEpisodeDetail: state.episodePage.isLoadingEpisodeDetail,
  episodeDetail: state.episodePage.episodeDetail,
  isLoadingEpisodeList: state.showPage.isLoadingEpisodeList,
  episodeList: state.showPage.episodeList,
  selectedSeason: state.episodePage.selectedSeason
});
export default connect(mapStateToProps, { getEpisodeList, getEpisodeDetailById, changeSeason })(
  EpisodePage
);
