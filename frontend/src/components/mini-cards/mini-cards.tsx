import type React from 'react';
import {
    Elevation,
    H3,
    Card,
    Switch,
    Spinner,
    ProgressBar,
    Button,
    Callout,
    IconName,
} from '@blueprintjs/core';
import classNames from 'classnames';
import styles from './mini-cards.module.scss';

const logo = 'https://static.wixstatic.com/shapes/610b66_1b7705fd82034afaafdedcc636d8079f.svg'; // bp-logo.svg (256x298)

export interface MiniCardsProps {
    intent?: 'primary' | 'success' | 'warning' | 'danger';
    calloutText?: string;
    className?: string;
    children?: React.ReactNode;
}

/**
 * This Mini Cards component is a simple demo component to showcase the capabilities of Codux,
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 *
 * Use this demo to get a feel for how easy and fun it is to create and edit components in Codux using Blueprint.js, a 3rd party React-based UI toolkit.
 *
 */
export const MiniCards = ({
    className,
    intent = 'primary',
    calloutText = 'Aliquam imperdiet lacus quam, imperdiet fermentum lectus pretium vitae. Curabitur quis porttitor lorem, sed porttitor erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam et blandit nisi. Curabitur iaculis vitae tellus sed hendrerit. Vestbulum fringilla massa in quam iaculis ullamcorper.',
    children,
}: MiniCardsProps) => {
    let calloutTitle: string, calloutIcon: IconName;

    switch (intent) {
        case 'primary':
            calloutTitle = 'Auto Updates';
            calloutIcon = 'automatic-updates';
            break;
        case 'success':
            calloutTitle = 'Successfully Updated';
            calloutIcon = 'tick-circle';
            break;
        case 'warning':
            calloutTitle = 'System Update required';
            calloutIcon = 'warning-sign';
            break;
        case 'danger':
            calloutTitle = 'Missing Permissions';
            calloutIcon = 'blocked-person';
            break;
        default:
            calloutTitle = 'Auto Updates';
            calloutIcon = 'automatic-updates';
    }

    return (
        <Card className={classNames(styles.wrapper, className)}>
            <img className={styles.logo} src={logo} alt="" />
            <Card className={styles.card} elevation={Elevation.THREE}>
                <Switch defaultChecked large />
                <div>
                    <H3 className={styles.title}>Enable Communication Limits</H3>
                    <p className={`${styles.title} ${styles.sub}`}>
                        Limits apply to Phone, FaceTime, Messages and iCloud contacts.{' '}
                    </p>
                </div>
            </Card>
            <Card className={styles.card} elevation={Elevation.THREE}>
                <Spinner intent={intent} size={33} />
                <span />
                <H3 className={styles.title}>Software Update Installation...</H3>
            </Card>
            <Card className={styles.card} elevation={Elevation.THREE}>
                <ProgressBar animate={false} intent={intent} value={0.65} />
                <span />
                <Button className={styles.btn} intent={intent} icon="cross" />
            </Card>
            <Callout title={calloutTitle} icon={calloutIcon} intent={intent}>
                <p className={classNames(styles.title, styles.sub)}>{calloutText}</p>
            </Callout>
            {children}
        </Card>
    );
};
