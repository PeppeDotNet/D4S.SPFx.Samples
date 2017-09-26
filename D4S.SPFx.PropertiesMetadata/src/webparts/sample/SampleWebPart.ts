import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IWebPartPropertiesMetadata
} from '@microsoft/sp-webpart-base';
import * as strings from 'SampleWebPartStrings';
import Sample from './components/Sample';
import { ISampleWebPartProps } from './ISampleWebPartProps';
import { PropertyFieldRichTextBox } from 'sp-client-custom-fields/lib/PropertyFieldRichTextBox';
import { PropertyFieldPicturePicker } from 'sp-client-custom-fields/lib/PropertyFieldPicturePicker';

export default class SampleWebPart extends BaseClientSideWebPart<ISampleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISampleWebPartProps > = React.createElement(
      Sample, { ...this.properties }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get propertiesMetadata(): IWebPartPropertiesMetadata {
    return {
      "name": { isSearchablePlainText: true },
      "description": { isHtmlString: true },
      "address": { isSearchablePlainText: false },
      "image": { isImageSource: true },
      "directions": { isLink: true }
    };
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
                PropertyPaneTextField('name', { label: 'Name' }),
                PropertyFieldRichTextBox('description', {
                  label: strings.DescriptionFieldLabel,
                  initialValue: this.properties.description,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  properties: this.properties,
                  key: 'description',
                  context: this.context
                }),
                PropertyPaneTextField('address', { label: 'Address' }),
                PropertyFieldPicturePicker('image', {
                  label: 'Select a picture',
                  initialValue: this.properties.image,
                  readOnly: true,
                  previewImage: true,
                  allowedFileExtensions: '.gif,.jpg,.jpeg,.bmp,.dib,.tif,.tiff,.ico,.png',
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  properties: this.properties,
                  context: this.context,
                  key: 'image'
                }),
                PropertyPaneTextField('directions', { label: 'Directions' })
              ]
            }
          ]
        }
      ]
    };
  }
}
