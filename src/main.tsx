import * as React from 'react';
import { render } from 'react-dom';

import FilteredList from './FilteredList';

var data = [{
  name: 'Matthew',
  sex: 'male'
}, {
  name: 'Amanda',
  sex: 'female'
}];

render((
	<FilteredList data= { data }  />
), document.getElementById('app'));
