import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// components
import Spinner from './spinner';

export type ButtonType = 'submit' | 'button' | 'link';
export type ButtonAppearance = 'primary' | 'secondary' | 'quiet' | 'alert' | 'link' | 'no-style';
export type ButtonShape = 'rectangle' | 'circle' | 'pill';

export interface ButtonProps {
    /** Optional ID for the button */
    id?: string;
    /** Called when the Button is clicked */
    onClickHandler?: () => void;
    /** Disables the button when true */
    disabled?: boolean;
    /** html button type: 'submit' | 'button' | 'link' */
    type?: ButtonType;
    /** CSS styling: 'primary' | 'secondary' | 'quiet' | 'alert' | 'link' | no-style' */
    appearance?: ButtonAppearance;
    /** Visual shape of the Button: 'rectangle' | 'circle' | 'pill' */
    shape?: ButtonShape;
    /** Replaces the Button text with a spinner when true */
    showSpinner?: boolean;
    /** URL to link to for type link */
    linkURL?: string;
    /** If true button of type link will open in a new tab */
    linkToNewTab?: boolean;
    /** Additional classes for styling */
    className?: string;
}

export class Button extends React.Component<ButtonProps, {}> {
    static defaultProps = {
        type: 'button',
        appearance: 'primary',
        shape: 'rectangle',
        linkToNewTab: false,
        className: '',
    };

    constructor(props) {
        super(props);

        this._onClickHandler = this._onClickHandler.bind(this);
    }

    private _isLinkInternal(): boolean {
        const {
            linkURL, disabled, showSpinner, linkToNewTab,
        } = this.props;
        return !linkToNewTab && !disabled && !showSpinner && linkURL && !(/^https?:\/\//.test(linkURL));
    }

    private _onClickHandler(e: React.MouseEvent<HTMLElement>): void {
        const { onClickHandler, disabled, showSpinner } = this.props;

        e.stopPropagation();
        if (onClickHandler && !(disabled || showSpinner)) {
            onClickHandler();
        }
    }

    private _renderInternalLink(classes: string): JSX.Element {
        const { id, linkURL, children } = this.props;

        return (
            <Link
                id={id}
                className={classes}
                to={linkURL}
            >
                <span className="text">{children}</span>
            </Link>
        );
    }

    private _renderExternalLink(classes: string): JSX.Element {
        const {
            id, disabled, showSpinner, linkURL, linkToNewTab, children,
        } = this.props;

        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
                id={id}
                className={classes}
                href={disabled || showSpinner ? undefined : linkURL}
                target={linkToNewTab ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={this._onClickHandler}
            >
                <span className="text">{children}</span>
                {showSpinner && <Spinner />}
            </a>
        );
    }

    private _renderButton(classes: string): JSX.Element {
        const {
            id, disabled, showSpinner, type, children,
        } = this.props;

        return (
            // eslint-disable-next-line react/button-has-type
            <button
                id={id}
                className={classes}
                onClick={this._onClickHandler}
                disabled={disabled || showSpinner}
                type={type}
            >
                <span className="text">{children}</span>
                {showSpinner && <Spinner />}
            </button>
        );
    }


    render(): JSX.Element {
        const {
            disabled, type, appearance, shape, showSpinner, className,
        } = this.props;

        const classes = classNames(`btn btn--${appearance} btn--${shape} ${className}`,
            { disabled }, { waiting: showSpinner });

        if (type === 'link' && this._isLinkInternal()) {
            return this._renderInternalLink(classes);
        }
        if (type === 'link') {
            return this._renderExternalLink(classes);
        }

        return this._renderButton(classes);
    }
}

export default Button;
