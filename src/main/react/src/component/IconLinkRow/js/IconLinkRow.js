import React from 'react';
import '../css/IconLinkRow.css';

class IconLinkRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var imageContext = require.context('../../../../public/img', true);
    var imageName = imageContext('./' + this.props.imageName);
    var linkText = this.props.linkText;
    var linkUrl = this.props.linkUrl;


    return (
      <React.Fragment>
        <div className="row-outer-div">
          <div className="row-inner-div">
            <div className="icon-div">
              <img className="icon-img" src={imageName} />
            </div>
            <div>
              <a className="link-text-div" href={linkUrl} target={'_blank'}>{linkText}</a>
            </div>
          </div>
        </div>
        <div className=".div-clear-both"></div>
      </React.Fragment>
    );
  }
};

export default IconLinkRow;