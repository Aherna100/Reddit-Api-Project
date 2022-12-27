import "./Navigation.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTerm, setSearchTerm, loadPostQuery } from '../../store/NavigationSlice';
import {NavLink} from 'react-router-dom';

export default function Navigation() {
    const [searchLocal, setSearchLocal] = useState('');
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectTerm);
    const term = useSelector(state => state.navigation.searchTerm);

    const onSearchChange = (e) => {
        setSearchLocal(e.target.value);
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchLocal));
    }

    useEffect(() => {
        setSearchLocal(searchTerm);
        dispatch(loadPostQuery(term));
    }, [searchTerm, term, dispatch]);

    return (
        <nav className="navBar">
            <form onSubmit={onSearchSubmit}>
                <div className="logoContent">
                    <NavLink
                        to="/"
                        className="nav-link"
                        >
                        <img src="reddit-logo.png" alt="reddit logo" className="navImg"/>
                    </NavLink>
                    
                </div>

                <div className="submitContent">
                    <input
                        type="text"
                        placeholder="search something"
                        className="navSearch"
                        value={searchLocal || ''}
                        onChange={onSearchChange}
                    />
                    <button
                        type="submit"
                        onClick={onSearchSubmit}
                        className="searchButton"
                    >Search</button>
                </div>
            </form>
        </nav>
    );

}