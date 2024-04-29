import styles from './show.module.css'

export default function ShowAndListComponent({ number, value }) {
      return (
            <div className={`${styles.wrap} font-mulish`}>
                  <div className={styles.number}>
                        <span>
                              <p>Icon</p> 
                        </span>
                        <div className="flex flex-row items-center">
                              <p className={number ? styles.paragraph : ''}>{number}</p>
                              <p className={!number ? styles.paragraph : styles.description}> {value}</p>
                        </div>

                  </div>
            </div>
      );
}