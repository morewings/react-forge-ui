import type {ReactNode} from 'react';
import {useLocalTheme} from 'css-vars-hook';
import {useMemo, forwardRef} from 'react';
import classNames from 'classnames';

import type {DataAttributes, LibraryProps} from '@/internal/LibraryAPI';
import {useLinkRefs} from '@/internal/hooks/useLinkRefs.ts';

import type {SizeUnit, FluidUnit} from './SizeTypes';
import classes from './Layout.module.css';

export type ContainerProps = DataAttributes &
    LibraryProps & {
        /** Set Container width in pixels as a number or set to `fluid` to make it 100% */
        width?: SizeUnit | FluidUnit;
        /** Set amount of columns to place in container */
        base?: number;
        /** Set a gap between columns in pixels */
        gap?: number;
        /** Select HTML element to render as a container */
        as?: string;
        /** Make container to take all vertical space */
        fullHeight?: boolean;
        children: ReactNode;
    };

const normalizeWidth = (widthProp: ContainerProps['width']) => {
    if (widthProp === 'fluid') {
        return '100%';
    }
    return `${widthProp}px`;
};

export const Container = forwardRef<HTMLElement, ContainerProps>(
    ({width = 1280, className, as = 'div', children, gap = 16, base = 12, fullHeight = false, ...nativeProps}, ref) => {
        const {LocalRoot, ref: internalRef} = useLocalTheme();
        useLinkRefs(ref, internalRef);
        const theme = useMemo(
            () => ({containerWidth: normalizeWidth(width), base, gap: `${gap}px`}),
            [width, gap, base]
        );
        return (
            <LocalRoot
                {...nativeProps}
                theme={theme}
                as={as}
                className={classNames(classes.container, {[classes['full-height']]: fullHeight}, className)}>
                {children}
            </LocalRoot>
        );
    }
);

Container.displayName = 'Container';
