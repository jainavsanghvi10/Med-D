import React from "react";
import { NavBeforeLogin } from "./NavBeforeLogin";
import { NavAfterLogin } from "./NavAfterLogin";
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';

export const Header = () => {
    const { currentUser } = useAuth();
    return (
		<>
			{currentUser ? <NavAfterLogin / > : <NavBeforeLogin/>}
		</>
	);
};