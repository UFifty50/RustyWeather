import styles from './sun-time.module.scss';
import classNames from 'classnames';
import letterSizesStyles from '../../globals/letterSizes.module.scss';

export interface SunTimeProps {
    className?: string;
    riseTime: number;
    setTime: number;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SunTime = ({ className, riseTime, setTime, children = 'SunTime' }: SunTimeProps) => {
    var riseDateTime = new Date(riseTime);
    var setDateTime = new Date(setTime);
    return (
        <div className={styles.root}>
            <div className={styles.detailGrid}>
                <div>
                    <img />
                    <p>Sunrise</p>
                    <p>{riseDateTime.getHours()}:{riseDateTime.getMinutes()}PM</p>
                </div>
                <div>
                    <img />
                </div>
                <div>
                    <img />
                    <p>Sunset</p>
                    <p>{setDateTime.getHours()}:{setDateTime.getMinutes()}PM</p>
                </div>
            </div>
        </div>
    );
};
