import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function (manifest) {
  manifest.addComponent({
    name: 'BootCampAuthor',
    icon: SitecoreIcon.Person,
    fields: [
      { name: 'authorname', type: CommonFieldTypes.SingleLineText },
      { name: 'authordesignation', type: CommonFieldTypes.SingleLineText },
      { name: 'authordepartment', type: CommonFieldTypes.SingleLineText },
      { name: 'authorImage', type: CommonFieldTypes.Image },
    ],
  });
}
