import type {Meta, StoryObj} from '@storybook/react';
import {Fragment, useCallback} from 'react';

// import {fn} from '@storybook/test';
import {NavList, NavLink, H2, Button} from '@/lib';
import {CloudUpload, IconFile} from '@/internal/Icons';
import {ButtonGroup} from '@/lib/ButtonGroup';

import {Drawer} from './Drawer.tsx';
import {useDrawerState} from './useDrawerState.tsx';

const meta = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    args: {},
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        id: {
            table: {
                disable: true,
            },
        },
        role: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    render: args => {
        const {isOpen, closeDrawer, openDrawer} = useDrawerState(args.id);
        const handleClick = useCallback(() => {
            isOpen ? closeDrawer() : openDrawer();
        }, [closeDrawer, isOpen, openDrawer]);
        return (
            <Fragment>
                <Button onClick={handleClick}>Toggle Drawer</Button>
                <Drawer {...args}>
                    <H2>Navigation</H2>
                    <NavList>
                        <NavLink title="Foo" href="#" icon={IconFile} />
                        <NavLink title="Bar" type="success" href="#" />
                        <NavLink title="Bazz" type="link" href="#" icon={CloudUpload} />
                        <NavLink title="Wery Longer name" href="#" />
                        <NavLink title="Shifted" shift={true} href="#" icon={CloudUpload} />
                    </NavList>
                </Drawer>
            </Fragment>
        );
    },
    args: {
        id: 'drawer-1',
    },
};

export const Multiple: Story = {
    render: () => {
        const {
            isOpen: isOpenFoo,
            closeDrawer: closeDrawerFoo,
            openDrawer: openDrawerFoo,
        } = useDrawerState('foo');
        const {
            isOpen: isOpenBar,
            closeDrawer: closeDrawerBar,
            openDrawer: openDrawerBar,
        } = useDrawerState('bar');
        const handleClickFoo = useCallback(() => {
            isOpenFoo ? closeDrawerFoo() : openDrawerFoo();
        }, [closeDrawerFoo, isOpenFoo, openDrawerFoo]);
        const handleClickBar = useCallback(() => {
            isOpenBar ? closeDrawerBar() : openDrawerBar();
        }, [closeDrawerBar, isOpenBar, openDrawerBar]);
        return (
            <Fragment>
                <ButtonGroup>
                    <Button onClick={handleClickFoo}>Toggle Drawer #1</Button>
                    <Button onClick={handleClickBar}>Toggle Drawer #2</Button>
                </ButtonGroup>
                <Drawer id="foo" placement="left">
                    <H2>Foo drawer</H2>
                </Drawer>
                <Drawer id="bar" placement="right">
                    <H2>Bar drawer</H2>
                </Drawer>
            </Fragment>
        );
    },
    args: {},
};
