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
    this.domElement.innerHTML = `<div>TEST</div>`;

    if(this.renderedOnce === false) {
      angular.module('helloworld', []);
      angular.bootstrap(this.domElement, ['helloworld']);
    }
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
