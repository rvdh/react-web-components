import * as React from 'react';
import classNames from 'classnames';
import { Breakpoint, LayoutWidth } from '../utils/layout_constants';

export interface GridItemProps {
    /** Width of the grid item: '1/1' | '1/2' | '1/3' | '1/4' | '1/5' | 'fit' | 'fill' */
    layoutWidth?: LayoutWidth;
    /** Breakpoint at which the widthFraction will be applied: 'xs' | 'sm' | 'md' | 'lg' */
    breakpoint?: Breakpoint;
    /** Optional ID for the grid item */
    id?: string;
    /** Optional class for the grid item */
    className?: string;
}

export const GridItem: React.StatelessComponent<GridItemProps> = ({
    layoutWidth, breakpoint, id, className, children,
}): JSX.Element => {
    const breakpointClass = breakpoint === 'xs' ? '' : `-${breakpoint}`;

    const classes = classNames(
        'grid-component__item',
        'layout__item',
        `u-${layoutWidth}${breakpointClass}`,
        className,
    );

    return (
        <div className={classes} id={id}>
            {children}
        </div>
    );
};

GridItem.defaultProps = {
    layoutWidth: '1/1',
    breakpoint: 'xs',
};

GridItem.displayName = 'GridItem';

export default GridItem;
