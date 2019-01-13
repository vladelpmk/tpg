import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as titleActions } from 'modules/title';
//import './index.scss';

import { Season } from './components/Season';

class Details extends Component {
  static propTypes = {
    actions: PropTypes.object,
    title: PropTypes.object,
    match: PropTypes.object,
  };

  constructor(props) {
    super();
    props.actions.getShowEpisodes(props.match.params.id);
  }

  render() {
    const { title } = this.props;
    return (
      <div className="col-md-12">
        <h1 className="text-center mt-5">Episode list</h1>
        {title.loading ? (
          <div className="text-center mb-5">
            <small className="text-success">loading...</small>
          </div>
        ) : (
          title.items
            .groupBy(x => x.season)
            .toList()
            .map((season, i) => <Season data={season} key={i} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(titleActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
