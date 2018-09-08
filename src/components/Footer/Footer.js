import React from "react";
import FilterButton from "../../containers/FilterButton";
import { visibilityFilters } from "../../states/actions";

const Footer = () => 
  <div className="ui segment">
    <h2 className="ui header">Display:</h2>
    <FilterButton filter={visibilityFilters.SHOW_ALL}>All Items</FilterButton>
    <FilterButton filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
    <FilterButton filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterButton>
  </div>

export default Footer;