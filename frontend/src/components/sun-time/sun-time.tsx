import styles from './sun-time.module.scss';
import classNames from 'classnames';
import letterSizesStyles from '../../globals/letterSizes.module.scss';
import SunRiseSVG from '../../assets/sunrise.svg';
import SunSetSVG from '../../assets/sunset.svg';

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
                <div className={styles.div1}>
                    <img src={SunRiseSVG} className={styles.img1} />
                    <p className={letterSizesStyles.textS}>Sunrise</p>
                    <p className={classNames(styles.p1, letterSizesStyles.textS)}>
                        {riseDateTime.getHours()}:{riseDateTime.getMinutes()}AM
                    </p>
                </div>
                <div className={styles.div3}>
                    <img />
                    <p>Moon phase here</p>
                </div>
                <div className={styles.div2}>
                    <img src={SunSetSVG} className={styles.img2} />
                    <p className={letterSizesStyles.textS}>Sunset</p>
                    <p className={letterSizesStyles.textS}>
                        {setDateTime.getHours()}:{setDateTime.getMinutes()}PM
                    </p>
                </div>
            </div>
        </div>
    );
};
