import type React from 'react';
import { Elevation, H1, H5, H6, Card } from '@blueprintjs/core';
import classNames from 'classnames';
import styles from './gift-card.module.scss';

const defaultPhotoURL =
    'https://static.wixstatic.com/media/610b66_d0b7a2ef26934253bfb4830813411f02~mv2.jpg'; //img-1.jpg (800x776)

export interface GiftCardProps {
    photoURL?: string;
    full?: boolean;
    className?: string;
    children?: React.ReactNode;
}

/**
 * This Gift Card component is a simple demo component to showcase the capabilities of Codux,
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 *
 * Use this demo to get a feel for how easy and fun it is to create and edit components in Codux using Blueprint.js, a 3rd party React-based UI toolkit.
 *
 */
export const GiftCard = ({
    className,
    photoURL = defaultPhotoURL,
    full = false,
    children,
}: GiftCardProps) => {
    return (
        <Card
            className={classNames(styles.card, className, {
                [styles.full]: full,
            })}
            elevation={Elevation.FOUR}
        >
            <img src={photoURL} alt="" />
            <div className={styles['card-body']}>
                <H1 className={styles.title}>LASHES & HAIR EXTENTIONS</H1>
                <H5 className={styles.desc}>
                    Donec faucibus, ante ut ultrices commodo, magna ex maximus, sodales neque dolor
                    vitae arcu. Nam euismod, neque quis laoreet interdum. Sed magna est, dictum at
                    faucibus.
                </H5>
                <div>{children}</div>
                <div className={styles.promo}>
                    <H6 className={styles.email}>
                        EMAIL | <br /> INFO@MYSITE.COM
                    </H6>
                    <H1 className={styles.price}>$50</H1>
                </div>
            </div>
        </Card>
    );
};
