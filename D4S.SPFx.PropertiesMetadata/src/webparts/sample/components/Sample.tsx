import * as React from 'react';
import styles from './Sample.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { ISampleWebPartProps } from '../ISampleWebPartProps';

export default class Sample extends React.Component<ISampleWebPartProps, {}> {
  public render(): React.ReactElement<ISampleWebPartProps> {
    return (
      <div className={styles.sample}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">{this.props.name}</span>
              <p className="ms-font-l ms-fontColor-white">{this.props.address}</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <a href={this.props.directions} className={styles.button}>
                <span className={styles.label}>Bring me there</span>
              </a>
              <hr />
              <img src={this.props.image} alt={this.props.name} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
