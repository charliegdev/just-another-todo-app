import React from "react";
import { visibilityFilters } from "../../states/actions";
import FilterButton from "../../containers/FilterButton";

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = visibilityFilters;

const Footer = () => (
  <div className="ui segment center aligned">
    <FilterButton filter={SHOW_ALL} iconName="server" onClick={() => console.log("clicked")}>
      All Items
    </FilterButton>
    <FilterButton filter={SHOW_ACTIVE} iconName="question circle" onClick={() => console.log("clicked")}>
      Incomplete
    </FilterButton>
    <FilterButton filter={SHOW_COMPLETED} iconName="thumbs up" onClick={() => console.log("clicked")}>
      Completed
    </FilterButton>
  </div>
);

export default Footer;
