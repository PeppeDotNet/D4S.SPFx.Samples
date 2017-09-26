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
import * as angular from 'angular'; 

export default class SampleWebPartWebPart extends BaseClientSideWebPart<ISampleWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.sample}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span class="ms-font-xl ms-fontColor-white">Wrong usage of Angular in a SPFx web part</span>
              <p class="ms-font-l ms-fontColor-white">Try to click F12 and then open the properties editor ...</p>
            </div>
          </div>
        </div>
      </div>`;

      //wrong!! bootstrap angular only with this.renderedOnce = true;
      angular.module('helloworld', []);      
      angular.bootstrap(this.domElement, ['helloworld']);

      //correct usage
      /* if(this.renderedOnce === false) {
        angular.module('helloworld', []);      
        angular.bootstrap(this.domElement, ['helloworld']);
      } */
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
