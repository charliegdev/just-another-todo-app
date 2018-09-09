import React from "react";
import { visibilityFilters } from "../../states/actions";
import FilterButton from "../../containers/FilterButton";

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = visibilityFilters;

const Footer = () => (
  <div className="ui segment center aligned">
    <FilterButton filter={SHOW_ALL} iconName="server">All Items</FilterButton>
    <FilterButton filter={SHOW_ACTIVE} iconName="question circle">In Progress</FilterButton>
    <FilterButton filter={SHOW_COMPLETED} iconName="thumbs up">Completed</FilterButton>
  </div>
);

export default Footer;
