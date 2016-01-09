import * as React from 'react';
import * as ReactDOM from 'react-dom';

import FilteredList from './FilteredList';

var data = [{
  name: 'Matthew',
  sex: 'male'
}, {
  name: 'Amanda',
  sex: 'female'
}];

ReactDOM.render( 
    <FilteredList data= { data } getFilterValue={ (o) => o.sex  } />, 
    document.getElementById('app'));
