import * as React from 'react';

interface FilterOptionsProperties extends React.Props<any> {
    onFilteredListChange?: React.EventHandler<React.SyntheticEvent>;
    options?: any[];
    selected?: any;
}

class FilterOptions extends React.Component<FilterOptionsProperties, any> 
{
    
  private handleChange = (e) => { 
    this.props.onFilteredListChange && this.props.onFilteredListChange(e.target.value);
  } 
      
  render() {
    return ( 
      <select defaultValue = {  this.props.selected } onChange = { this.handleChange } > 
        {
          this.props.options.map(option => {
            return ( 
              <option key = { option } value = { option } >                             
                { option } 
              </option>);
          })          
        }
      </select> 
    );
  }
}

interface FilteredItemsProps extends React.Props<any>
{
    data: any[];
    filter: Object;
    getFilterValue(Object): Object; // returns the key for one of the items in the data array.
}

class FilteredItems  extends React.Component<FilteredItemsProps, any> 
{
  render() 
  {
    var filter = this.props.filter;
    var filteredData = this.props.data;
    if (filter != '') {  
        filteredData = this.props.data.filter((item) => {
        return (this.props.getFilterValue(item) == filter); 
        });
    }
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

interface FilteredListProps extends React.Props<any>
{
    data: any[];
    getFilterValue(Object): Object; // returns the key for one of the items in the data array.
}

export class FilteredList extends React.Component<FilteredListProps, any> 
{
  
  constructor(props) 
  {
     super();
     this.state = { filter: ''};  
  }
    
  handleChange = (val) => {
    this.setState({
      filter: val
    });
    console.log(val);
  }
  
  render() {
    // create list of options from input data 
    var optionsArray = this.props.data.map((item) => {
      return this.props.getFilterValue(item);
    });
    //TODO optionsArray.uniq from lodash    
    optionsArray.unshift('');
    return ( 
    	<div className="filter-form">
        <FilterOptions 
          options={ optionsArray }      
          selected={ this.state.filter }
          onFilteredListChange={ this.handleChange }             
        />  
        <FilteredItems data={ this.props.data } filter={ this.state.filter } getFilterValue={ this.props.getFilterValue } /> 
      </div>
    );
  }
}

export default FilteredList;