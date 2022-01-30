import { render, screen } from '@testing-library/react';
import Header from "./index.js";

import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

test('<Header /> Component as default', () => {
    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
            <Header />
        </Router>
    );

    const msg = screen.getByText(`App`);
    expect(msg).toBeInTheDocument();
});

test('<Header /> Component with custom name', () => {
    const history = createMemoryHistory();

    render(
        <Router location={history.location} navigator={history}>
            <Header name={"Feisbrut"} />
        </Router>
    );

    const msg = screen.getByText(`Feisbrut`);
    expect(msg).toBeInTheDocument();
});

test('<Header /> Component with custom links', () => {
    const history = createMemoryHistory();

    const links = [
        { link: "/", label: "Home" },
        { link: "/friends", label: "Friends" },
        { link: "/messages", label: "Messages" },
        { link: "/login", label: "Login" }
    ];

    const { container } = render(
        <Router location={history.location} navigator={history}>
            <Header links={links} />
        </Router>
    );

    const lis = container.querySelectorAll("nav li")
    expect(lis.length).toBe(links.length);
});