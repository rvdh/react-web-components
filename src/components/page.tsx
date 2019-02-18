import * as React from 'react';

// components
import PageTitle from './page_title';

import classNames = require('classnames');

export interface PageProps {
    /** The page title displayed at the top of the page */
    title?: string;
    /** The max width of the page content. The content will be centered horizontally on the page */
    maxWidth?: number | string;
    /** Optional ID for the button */
    id?: string;
    /** Additional classes for styling */
    className?: string;
    /** The page content */
    children: any;
}

export const Page: React.StatelessComponent<PageProps> = ({
    title, maxWidth, id, className, children,
}): JSX.Element => (
    <div id={id} className={classNames('page', className)}>
        <div className="page__content" style={{ maxWidth }}>
            {title && <PageTitle title={title} />}
            {children}
        </div>
    </div>
);

Page.displayName = 'Page';

export default Page;
