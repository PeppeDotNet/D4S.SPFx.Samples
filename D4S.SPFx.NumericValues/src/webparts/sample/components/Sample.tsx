import * as React from 'react';
import styles from './Sample.module.scss';
import { ISampleProps } from './ISampleProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Sample extends React.Component<ISampleProps, {}> {
  public render(): React.ReactElement<ISampleProps> {
    var myAge:number = 34;
    return (
      <div className={styles.sample}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <p className="ms-font-l ms-fontColor-white">Now I'm {myAge} years old</p>
              <p className="ms-font-l ms-fontColor-white">In {this.props.age1} years I will be {this.props.age1 + myAge}</p>
              <p className="ms-font-l ms-fontColor-white">In {this.props.age2} years I will be {this.props.age2 + myAge}</p>
              <p className="ms-font-l ms-fontColor-white">In {this.props.age3} years I will be {this.props.age3 + myAge}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
