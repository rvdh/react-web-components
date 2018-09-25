import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text, selectV2 } from '@storybook/addon-knobs/react';
import styles from "@sambego/storybook-styles";
import { withInfo } from '@storybook/addon-info';

import Tile from '../components/tile';
import ProgressBar from '../components/progress_bar';
import PanelArrow from '../components/panel_arrow';
import Divider from '../components/divider';
import Pill from '../components/pill';
import CircleIcon from '../components/circle_icon';

import Ratings from '../components/ratings';
import HighlightIcon from '../components/icons/highlight_icon';
import ApprovedIcon from '../components/icons/approved_icon';

const stories = storiesOf('Other', module);

stories.addDecorator(withKnobs)
    .addDecorator(styles({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }));

stories.add('Ratings', withInfo(
    'Ratings component'
)(() =>
    <div style={{ width: 200 }} >
        <Ratings max={5} rating={4.3} Icon={HighlightIcon} />

        <Ratings max={10} rating={4.3} Icon={HighlightIcon} />

        <Ratings max={10} rating={0} Icon={HighlightIcon} />

        <Ratings max={5} rating={3.5} Icon={ApprovedIcon} />

        <Ratings max={5} rating={5 / 3} Icon={ApprovedIcon} />

        <Ratings max={5} rating={null} Icon={ApprovedIcon} />
    </div>
));

stories.add('Progress bar', withInfo(
    'Progress bar component'
)(() =>
    <div style={{ width: 200 }} >
        <ProgressBar progressPercentage={number('Percentage', 33)}
            isStopped={boolean('isStopped', false)}
            barHeight={text('Bar height', '0.6rem')} />
    </div>
));

stories.add('Panel Arrow', withInfo(
    'A flippable arrow used for displaying when something is open or not'
)(() =>
    <PanelArrow
        active={boolean('Active', false)}
        width={text('Width', '2.4rem')} />
));

const directionOptions = {
    'horizontal': 'horizontal',
    'vertical': 'vertical',
};
const directionValue = 'horizontal';

stories.add('Divider', withInfo(
    'A divider line. Useful for breaking up content'
)(() =>
    <div style={{ width: 200, height: 200 }} >
        <Divider direction={selectV2('Direction', directionOptions, directionValue)} />
    </div>
));

stories.add('Pill', withInfo(
    'A toggleable pill'
)(() =>
    <Tile padding="md">
        <Pill active={boolean('Active', false)}>
            {text('Text', 'Pill')}
        </Pill>
    </Tile>
));

const styleOptions = {
    'primary': 'primary',
    'secondary': 'secondary',
    'alert': 'alert'
};
const styleValue = 'primary';

stories.add('Circle Icon', withInfo(
    'A circle icon'
)(() =>
    <CircleIcon style={selectV2('Style', styleOptions, styleValue)} disabled={boolean('Disabled', false)} size={text('Size', '4rem')}>
        {text('Text', '1')}
    </CircleIcon>
));
