import { Card, Button, H2, Elevation } from '@blueprintjs/core';
import classNames from 'classnames';
import styles from './new-component.module.scss';

export interface NewComponentProps {
    className?: string;
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Card new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({
    className,
    title = 'Card Title',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    children,
}: NewComponentProps) => {
    return (
        <Card className={classNames(styles.root, className)} elevation={Elevation.TWO} interactive>
            <H2>{title}</H2>
            <p>{description}</p>
            <div>{children}</div>
            <Button text="Button" type="button" intent="primary" icon="arrow-right" />
        </Card>
    );
};
