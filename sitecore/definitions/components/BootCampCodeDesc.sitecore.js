// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addComponent({
    name: 'BootCampCodeDesc',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'CodeDescTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'CodeDescBrief', type: CommonFieldTypes.MultiLineText },
      { name: 'CodeDescSubTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'CodeDescSubBrief', type: CommonFieldTypes.MultiLineText },
      { name: 'CodeDescCodeSnippet', type: CommonFieldTypes.Image },
      { name: 'CodeDescCodeDescription', type: CommonFieldTypes.RichText },
    ],
  });
}
