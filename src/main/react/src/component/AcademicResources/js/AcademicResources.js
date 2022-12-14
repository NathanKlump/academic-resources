import React from 'react';
import IconLinkRow from '../../IconLinkRow/js/IconLinkRow';
import '../../IconLinkRow/css/IconLinkRow.css';

class AcademicResources extends React.Component {
  state={
        renderData : [],
  }

  constructor(props) {
    super(props);
  }


  componentDidMount(){
    fetch('/academic-resources/Linkinfo').then(async (res) => {
        let data = await res.json();
        this.setState(
            {
                renderData : data,
            }
        )
    })
    .catch((e) => {console.log('err')})
  }

  render() {
    let data = this.state.renderData;
    return (
      <React.Fragment>
        <div className="parent-app-icons">
        {
            data.map(function(rowData, index){
                return(
                <IconLinkRow
                                    imageName = {rowData.imageName}
                                    linkText = {rowData.linkText}
                                    linkUrl = {rowData.linkURL} />
                )
            })
        }
        </div>
      </React.Fragment>
    );
  }
};

export default AcademicResources;