import * as React from 'react';

// storybook
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */

// components
import Page from '../components/page';
import Button from '../components/button';
import Tile from '../components/tile';

const stories = storiesOf('Example layouts', module);

stories.addDecorator(withKnobs);

stories.add('Sign In', withInfo(
    'A example layout for a sign in page',
)(() => (
    <Page title="Sign In" maxWidth={600}>
        <Tile padding="lg" align="center">
            <p>In order to continue, you must sign in with your Ultimaker account.</p>
            <Button onClickHandler={action('clicked')}>Sign In</Button>
        </Tile>
    </Page>
)));
