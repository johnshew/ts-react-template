import * as React from 'react';


class FilterOptions extends React.Component<any, any> 
{
  
  handleChange(e) 
  {
    var val = e.target.value;
    this.props.onFilterListChanged(val);
  }
  
  render() {
    var selectedOption = this.props.selected;
    return ( 
      <select 
        defaultValue = { selectedOption }
        onChange = { this.handleChange.bind(this) } 
      > 
        {
          this.props.options.map(option => {
            return ( 
              <option 
                key = { option }
                value = { option }              
              > 
                { option } 
              </option>);
          })          
        }
      </select> 
    );
  }
}

class FilterItems  extends React.Component<any, any> 
{
  render() {
    var filter = this.props.filter;
    var filteredData = this.props.data.filter((item) => {
      return (!filter || item.sex == filter) //TODO generalize
    });

    return ( 
      <div> {
        filteredData.map(function(item) {
          return ( 
            <div key={ item.name} > 
              {  item.name } 
            </div>);
        })
    } </div>);
  }
}


class FilteredList extends React.Component<any, any> 
{
  
  constructor(props) 
  {
     super();
     this.state = { filter: ''};  
  }
    
  handleFilterListChange(val) {
    this.setState({
      filter: val
    });
    console.log(val);
  }
  
  render() {
    // create list of options from input data 
    var optionsArray = this.props.data.map((item) => {
      return item.sex;  //TODO fix to be general
    });
    optionsArray.unshift("");
    return ( 
    	<div className="filter-form">
        <FilterOptions 
          options={ optionsArray }      
          selected={ this.state.filter }
          onFilterListChanged={ this.handleFilterListChange.bind(this) }
		      // multi-select={ true }          
        />  
        <FilterItems data={ this.props.data } filter={ this.state.filter } /> 
      </div>
    );
  }
}

export default FilteredList;