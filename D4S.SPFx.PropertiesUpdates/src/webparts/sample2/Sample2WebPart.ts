import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown, PropertyPaneDropdownOptionType
} from '@microsoft/sp-webpart-base';
import * as strings from 'Sample2WebPartStrings';
import Sample2 from './components/Sample2';
import { ISample2Props } from './components/ISample2Props';
import { ISample2WebPartProps } from './ISample2WebPartProps';

export default class Sample2WebPart extends BaseClientSideWebPart<ISample2WebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISample2Props > = React.createElement(
      Sample2,
      {
        listid: this.properties.listid
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Web part configuration"
          },
          groups: [
            {
              groupName: "Data source",
              groupFields: [
                PropertyPaneDropdown('listid', {
                  label: "List", options: [ 
                    {key: "", text: "Current web lists", type: PropertyPaneDropdownOptionType.Header},
                    {key: "1", text: "List 1", type: PropertyPaneDropdownOptionType.Normal},
                    {key: "2", text: "List 2", type: PropertyPaneDropdownOptionType.Normal},
                    {key: "3", text: "List 3", type: PropertyPaneDropdownOptionType.Normal}
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
