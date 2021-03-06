import React from 'react';
import '../styles/TabLink.css';

class TabLink extends React.Component {
    render() {
        const { activeTab, tabHandler, linkText } = this.props;
        return (
            <li
                className={`${
                    activeTab === linkText ? 'active-tab ' : ''
                }tab-link`}
                onClick={tabHandler}
            >
                {linkText}
            </li>
        );
    }
}

export default TabLink;
