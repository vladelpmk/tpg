import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as searchActions } from 'modules/search';

import { Shows } from './components/Shows';

class Home extends Component {
  static propTypes = {
    search: PropTypes.object,
    actions: PropTypes.object,
  };

  state = {
    term: '',
  };

  handleTyping = e => {
    const { actions } = this.props;

    this.setState({
      ...this.state,
      term: e.target.value,
    });

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      actions.searchShow(this.state.term);
    }, 500);
  };

  render() {
    const { search } = this.props;
    return (
      <div className="col-md-6 offset-md-3 text-center mt-5 mb-5">
        <h1>Find a show</h1>

        <div className="input-group">
          <input
            onKeyUp={this.handleTyping}
            type="text"
            className="form-control"
            placeholder="Search for a show"
            aria-label="Search for a show"
          />
        </div>
        <small>type your favorite show</small>

        <div>
          {' '}
          {!search.initialLoad && (
            <Shows data={search.items} loading={search.loading} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(searchActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
