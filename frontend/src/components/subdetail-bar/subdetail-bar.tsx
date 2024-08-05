import { Card, Button, H2, Elevation } from '@blueprintjs/core';
import classNames from 'classnames';
import styles from './subdetail-bar.module.scss';
import SunnySvg from '../../assets/sunny.svg';
import letterSizesStyles from '../../globals/letterSizes.module.scss';

export type WindSpeedType = 'mi/h'| 'km/h';

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
                    <p>Wind</p>
                </div>
                <div>
                    <p>Humidity</p>
                </div>
                <div className={styles.div2}>
                    <p>Air Quality</p>
                </div>
                <div>
                    <p>{windSpeed} {windSpeedType}</p>
                    <img />
                </div>
                <div>
                    <p>{humidity}%</p>
                </div>
                <div className={styles.div3}>
                    <img className={styles.img1} src={SunnySvg} />
                    <p className={classNames(styles.p1, letterSizesStyles.textS)}>{pollution}</p>
                </div>
            </div>
        </div>
    );
};
