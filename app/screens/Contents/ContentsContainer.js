import React, { Component } from 'react';
import ContentsView from './ContentsView';
import { connect } from 'react-redux';
import * as contentActions from 'app/actions/contentsActions';

class ContentsContainer extends Component {
	componentDidMount() {
		this.props.requestContents(1);
	}

	render() {
		return <ContentsView {...this.props} />;
	}
}

function mapStateToProps(state) {
	const { title, items, totalItems, searchedItems } = state.contentsReducer;
	return {
		title,
		items,
		totalItems,
		searchedItems
	};
}
function mapDispatchToProps(dispatch) {
	return {
		requestContents: pageNum => dispatch(contentActions.requestContents(pageNum)),
		search: keyWord => dispatch(contentActions.search(keyWord))
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentsContainer);
