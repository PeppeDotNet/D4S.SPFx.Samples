import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-webpart-base';
import { PropertyFieldNumericInput } from 'sp-client-custom-fields/lib/PropertyFieldNumericInput';

import * as strings from 'SampleWebPartStrings';
import Sample from './components/Sample';
import { ISampleProps } from './components/ISampleProps';
import { ISampleWebPartProps } from './ISampleWebPartProps';

export default class SampleWebPart extends BaseClientSideWebPart<ISampleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISampleProps > = React.createElement(
      Sample, {...this.properties }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [{
          header: { description: "Web part configuration" },
          groups: [{
              groupName: "Wrong way",
              groupFields: [PropertyPaneTextField('age1', { label: "Age" })]
            },{
              groupName: "Correct way",
              groupFields: [PropertyPaneSlider('age2', { label: "Age", min: 1, max: 120 })]
            },{
              groupName: "Best way",
              groupFields: [PropertyFieldNumericInput('age3', { 
                label: "Age", 
                initialValue: this.properties.age3, 
                min: 0, 
                max: 100, 
                step: 1, 
                precision: 0, 
                size: 10, 
                disabled: false, 
                onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                render: this.render.bind(this),
                disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                properties: this.properties,
                onGetErrorMessage: null,
                deferredValidationTime: 0,
                key: 'age3' })]
            }
          ]
        }
      ]
    };
  }
}
