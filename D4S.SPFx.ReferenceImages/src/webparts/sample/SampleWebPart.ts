import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './SampleWebPart.module.scss';
import * as strings from 'SampleWebPartStrings';
import { ISampleWebPartProps } from './ISampleWebPartProps';

export default class SampleWebPartWebPart extends BaseClientSideWebPart<ISampleWebPartProps> {

  public render(): void {
    const logo: any = require('./images/dev4side.jpg');
    debugger;
    this.domElement.innerHTML = `
      <div class="${styles.sample}">
        <div class="${styles.container}">
          <!-- wrong method! -->
          <!-- it's working only inside the local workbanch -->
          <img src="../src/webparts/Sample/images/dev4side.jpg" />
          <hr />
          <!-- correct method, but not always a good option -->
          <div class="${styles.d4slogo}"></div>
          <hr />
          <!-- correct method -->
          <img src="${logo}" />
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
