import * as React from 'react';
import styles from './Sample2.module.scss';
import { ISample2Props } from './ISample2Props';
import { escape } from '@microsoft/sp-lodash-subset';
import { IListItem } from '../model/IListItem';
import { ISample2State } from './ISample2State';

export default class Sample2 extends React.Component<ISample2Props, ISample2State> {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  public render(): React.ReactElement<ISample2Props> {
    return (
      <div className={styles.sample2}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">              
              {/* with this line, render method will be called everytime the listid prop will change
              <p className="ms-font-l ms-fontColor-white">Selected list: {this.props.listid}</p>*/}
              
              {/* with these lines, render method will not be called when listid is changed */}
              <ul>
                {this.state.items.map((item) => <li>{item.Title}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //this method is called everytime the props will be changed
  public componentWillReceiveProps(props: ISample2Props) {
    if(props.listid) {
      this.setState({
        items: this.getListItems(props.listid)
      });
    }
  }

  //Sample method to get some dummy data
  private getListItems(listid: string): IListItem[] {
    switch(listid) {
      case "1": {
        return [
          {Id: 1, Title: "Item 1"},
          {Id: 2, Title: "Item 2"},
          {Id: 3, Title: "Item 3"}
        ];
      }
      case "2": {
        return [
          {Id: 4, Title: "Item 4"},
          {Id: 5, Title: "Item 5"},
          {Id: 6, Title: "Item 6"}
        ];
      }
      case "3": {
        return [
          {Id: 7, Title: "Item 7"},
          {Id: 8, Title: "Item 8"},
          {Id: 9, Title: "Item 9"}
        ];
      }
    }
  }
}
