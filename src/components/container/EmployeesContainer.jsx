import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeTable from "../EmployeeTable";
import API from "../../utils/API";

class EmployeeContainer extends Component{
    state = {
        search: "",
        employees:[],
        filteredEmployees:[],
        sortDirections: this.initialSortDirections,
    }
};