import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const BootCampTabPanInfo = (props) => (
  <div>
    <h1>
      <Text field={props.fields.heading} />
    </h1>
    <div className="tab-pane active" id="tab01" role="tabpanel">
      <div className="tab-pane-item">
        <RichText field={props.fields.content} />
      </div>
      <div className="tab-pane-item">
        <h2></h2>
        <button id={getFieldValue(props.fields, 'buttonId')} className="section-btn">
          {getFieldValue(props.fields, 'buttonText')}
        </button>
      </div>
    </div>
    <script type="text/javascript">HTML.raw({getFieldValue(props.fields, 'buttonScript')})</script>
  </div>
);

export default BootCampTabPanInfo;
