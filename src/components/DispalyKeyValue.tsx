
import clsx from 'clsx';
import styles from './DisplayKeyValue.module.scss';

export default function DisplayKeyValue({ data }) {
    const rows = Object.entries(data).map(([key, value]) => ({ key, value:JSON.stringify(value) }));
    console.log(rows);
    return (
        <div  className={clsx(styles.kvContainer)}>
            {rows.map((x) => (
            <span key={x.key}>
                <div><span className={clsx(styles.key)}>{x.key}:</span><span> {x.value}</span></div>
            </span>
            ))}
        </div>
    );
};