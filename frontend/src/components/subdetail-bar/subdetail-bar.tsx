import { Card, Button, H2, Elevation } from '@blueprintjs/core';
import classNames from 'classnames';
import styles from './subdetail-bar.module.scss';
import SunnySvg from '../../assets/sunny.svg';
import letterSizesStyles from '../../globals/letterSizes.module.scss';

export type WindSpeedType = 'mi/h' | 'km/h';

export interface SubdetailBarProps {
    className?: string;
    windSpeed: number;
    windSpeedType: WindSpeedType;
    humidity: number;
    pollution: number;
    children?: React.ReactNode;
}

export const SubdetailBar = ({
    className,
    windSpeed,
    windSpeedType,
    humidity,
    pollution,
    children,
}: SubdetailBarProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.detailGrid}>
                <div className={styles.div1}>
                    <p className={classNames(letterSizesStyles.textMS, styles.p2)}>Wind</p>
                </div>
                <div className={styles.div4}>
                    <p className={letterSizesStyles.textMS}>Humidity</p>
                </div>
                <div className={styles.div2}>
                    <p className={letterSizesStyles.textMS}>Air Quality</p>
                </div>
                <div className={styles.div5}>
                    <div className={styles.div6}>
                        <p className={letterSizesStyles.textS}>
                            {windSpeed} {windSpeedType}
                        </p>
                        <img />
                    </div>
                </div>
                <div className={styles.div7}>
                    <p className={letterSizesStyles.textS}>{humidity}%</p>
                </div>
                <div className={styles.div3}>
                    <div className={styles.div8}>
                        <img className={styles.img1} src={SunnySvg} />
                        <p className={classNames(styles.p1, letterSizesStyles.textS)}>
                            {pollution}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
