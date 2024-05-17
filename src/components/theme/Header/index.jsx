import React, { useState } from 'react';

export const Header = () => {
    const [sidebar, toggle] = useState(false);

    return (
        <Wrapper>
            <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
            <Navbar />
            <Hamburger sidebar={sidebar} toggle={toggle} />
            <Sidebar sidebar={sidebar} toggle={toggle} />
        </Wrapper>
    );
};