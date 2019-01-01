import React from 'react';
// 组件
import SearchHeader from '@/components/SearchHeader/index.jsx';
import SearchList from './subpage/List.jsx';

class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const params = this.props.match.params;
    return (
      <div>
        <SearchHeader keyword={params.keyword} />
        <SearchList keyword={params.keyword} category={params.category} />
      </div>
    )
  }
}

export default Search;
