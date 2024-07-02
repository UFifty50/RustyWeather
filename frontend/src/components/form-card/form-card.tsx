import type React from 'react';
import { Elevation, H1, TextArea, Button, Card, InputGroup } from '@blueprintjs/core';
import classNames from 'classnames';
import styles from './form-card.module.scss';

const logo = 'https://static.wixstatic.com/shapes/610b66_1b7705fd82034afaafdedcc636d8079f.svg'; // bp-logo.svg (256x298)

export interface FormCardProps {
    formType?: 'signin' | 'contact' | 'signup';
    className?: string;
    children?: React.ReactNode;
}

/**
 * This Form Card component is a simple demo component to showcase the capabilities of Codux,
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 *
 * Use this demo to get a feel for how easy and fun it is to create and edit components in Codux using Blueprint.js, a 3rd party React-based UI toolkit.
 *
 */
export const FormCard = ({ className, formType = 'signin', children }: FormCardProps) => {
    const submitCaption =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : 'Send';
    const formTitle =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : 'Contact Us';

    return (
        <Card
            className={classNames(styles.card, styles.wrapper, className)}
            elevation={Elevation.FOUR}
        >
            <div className={classNames(styles.card, styles.header)}>
                <img className={styles.logo} src={logo} alt="" />
                <H1>{formTitle}</H1>
            </div>
            <InputGroup type="email" fill round placeholder="Your Email" id="email" />

            {formType !== 'contact' ? (
                <InputGroup type="password" fill round placeholder="Password" id="pass" />
            ) : (
                <TextArea />
            )}
            <div>{children}</div>
            <div className={classNames(styles.card, styles.submit)}>
                {formType !== 'contact' ? 'Forgot your Password?' : <span />}
                <Button
                    text={submitCaption}
                    className={styles.btn}
                    intent="primary"
                    type="submit"
                />
            </div>
        </Card>
    );
};
